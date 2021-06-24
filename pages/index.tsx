import Head from 'next/head'
// import '../styles/globals.css'
import { GetStaticProps } from 'next';
import PageWithLayoutType from '../types/pageWithLayout'
import React, { FC } from 'react'
import { fetchEntries } from '../utils/contentfulPosts'
import MainLayout from '../layouts/mainLayout'


// function MyApp({ Component, pageProps }: AppLayoutProps) {
// export default function Home({ posts }) {

interface contentfulDataTypes {
  testText: string,
}

interface HomeProps {
  posts: Array<contentfulDataTypes>
}

const Home: FC<HomeProps> = ({ posts }) => {
  return (
    <div className="container">
      <Head>
        <title>The Grief Gang</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* <Header /> */}
        <div style={{ backgroundColor: 'black', color: 'black'}}>
         
          {posts.map((p) => {
            return <p style={{ color: 'white'}}>{p.testText}</p>
            // return <Post key={p.date} date={p.date} title={p.title} />
          })}
        </div>
      </main>

      {/* <Footer /> */}

      <style jsx>{`
        .container {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .posts {
          display: flex;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
            Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
(Home as PageWithLayoutType).layout = MainLayout

export default Home;


export const getStaticProps: GetStaticProps = async () => {
  const res = await fetchEntries()
  const posts = await res.map((p) => {
    return p.fields
  })

  return {
    props: {
      posts
    },
  }
}
