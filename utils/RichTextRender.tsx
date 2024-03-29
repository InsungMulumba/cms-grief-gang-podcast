import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import styled from "styled-components";

// Create a bespoke renderOptions object to target BLOCKS.EMBEDDED_ENTRY (linked block entries e.g. code blocks)
// INLINES.EMBEDDED_ENTRY (linked inline entries e.g. a reference to another blog post)
// and BLOCKS.EMBEDDED_ASSET (linked assets e.g. images)

function renderOptions(links) {
  // create an asset map
  const assetMap = new Map();
  // loop through the assets and add them to the map
  for (const asset of links.assets.block) {
    assetMap.set(asset.sys.id, asset);
  }

  // create an entry map
  const entryMap = new Map();
  // loop through the block linked entries and add them to the map
  for (const entry of links.entries.block) {
    entryMap.set(entry.sys.id, entry);
  }

  // loop through the inline linked entries and add them to the map
  for (const entry of links.entries.inline) {
    entryMap.set(entry.sys.id, entry);
  }

  const BlogImage = styled.img`
    height: 300px;
    width: 300px;
    margin: 4% auto;

    display: block;
    @media (max-width: 1280px) {
      width: 100%;
      height: auto;
      margin: 10% auto;
    }
  `;

  return {
    // other options...
    renderText: (text) => {
      return text.split("\n").reduce((children, textSegment, index) => {
        return [
          ...children,
          index > 0 && (
            <>
              <br key={index} />
              {/* <br key={index} /> */}
            </>
          ),
          textSegment,
        ];
      }, []);
    },

    renderNode: {
      // other options...
      [INLINES.EMBEDDED_ENTRY]: (node, children) => {
        // find the entry in the entryMap by ID
        const entry = entryMap.get(node.data.target.sys.id);

        // render the entries as needed
        if (entry.__typename === "BlogPost") {
          return <a href={`/blog/${entry.slug}`}>{entry.title}</a>;
        }
      },
      [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
        // find the entry in the entryMap by ID
        const entry = entryMap.get(node.data.target.sys.id);

        // render the entries as needed by looking at the __typename
        // referenced in the GraphQL query
        if (entry.__typename === "CodeBlock") {
          return (
            <pre>
              <code>{entry.code}</code>
            </pre>
          );
        }

        if (entry.__typename === "VideoEmbed") {
          return (
            <iframe
              src={entry.embedUrl}
              height="100%"
              width="100%"
              frameBorder="0"
              scrolling="no"
              title={entry.title}
              allowFullScreen={true}
            />
          );
        }
      },
      [BLOCKS.EMBEDDED_ASSET]: (node, next) => {
        // find the asset in the assetMap by ID
        const asset = assetMap.get(node.data.target.sys.id);

        // render the asset accordingly
        return <BlogImage src={asset.url} alt="My image alt text" />;
      },
    },
  };
}

// Render post.body.json to the DOM using
// documentToReactComponents from "@contentful/rich-text-react-renderer"

export function renderPost(post) {
  return <>{documentToReactComponents(post.json, renderOptions(post.links))}</>;
}
