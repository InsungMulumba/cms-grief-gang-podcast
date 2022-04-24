import styled, { keyframes } from "styled-components";
import { FC, useEffect } from "react";
import { TitleH2 } from "styles/headings";
import colors from "../../styles/colors";

const Text = styled.p`
  font-family: "Spartan", sans-serif;
  font-size: 24px;
  color: black;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);
  @media (min-width: 1280px) {
    margin-bottom: 32px;
  }
`;

const imageGrow = keyframes`
    0% {
      opacity: 0%;
    }
    100% {
      opacity: 100%;
    }
`;

const Root = styled.div`
  width: 100%;
  @media (min-width: 1280px) {
    width: 70%;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 40px;
  background-color: white;
`;

const PartnerLogos = styled.div`
  flex-direction: column;
  display: contents;
  flex-wrap: wrap;
  :hover {
    transform: scale(1.2);
  }
  @media (min-width: 767px) {
    flex-direction: row;
    margin: 20px 0px 40px;
    display: flex;
    a {
      flex: 1 0 33%;
      display: flex;
      justify-content: center;
    }
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;

const PartnerImg = styled.img`
  margin: 0px 20px;
  object-fit: contain;

  &.image-grow {
    animation: ${imageGrow} 3.5s ease-out 0.5s both;
  }
  @media (min-width: 1280px) {
    height: 200px;
    width: 200px;
  }

  @media (max-width: 1279px) {
    height: 120px;
    width: 120px;
    margin: 5% 0%;
  }
`;

interface mediaProps {
  data: string;
}

const urls = [
  "https://www.bbc.co.uk/programmes/p0b51t9l",
  "https://www.vogue.co.uk/arts-and-lifestyle/article/mothers-day-grief",
  "https://www.womenshealthmag.com/uk/health/mental-health/a32798410/grief-networks/",
  "https://www.harpersbazaar.com/uk/beauty/mind-body/a35861864/pandemic-grief/",
  "https://www.ok.co.uk/lifestyle/how-to-cope-mothers-day-26391074",
  "https://www.refinery29.com/en-gb/grief-uk-public-health-crisis",
];

const images = [
  "/partners/bbc.png",
  "/partners/vogue.png",
  "/partners/womenshealth.png",
  "/partners/hb.png",
  "/partners/ok.png",
  "/partners/refinery.png",
];
const Media: FC = () => {
  useEffect(() => {
    const myImg = document.querySelectorAll(".animate-image-grow");
    let imgArray = Array.from(myImg);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          for (const i in imgArray) {
            myImg[i].classList.add("image-grow");
          }
          // observer.unobserve;
        } else {
          //out of view
        }
      });
    });

    observer.observe(myImg[0]);
  }, []);

  return (
    <Root>
      <Text>We've also been featured on a number of different platforms</Text>
      <PartnerLogos>
        {urls.map((url, index) => (
          <a target="_blank" href={url}>
            <PartnerImg
              className="animate-image-grow"
              src={`${images[index]}`}
              loading="lazy"
            />
          </a>
        ))}
        {/* <PartnerImg
          className="animate-image-grow"
          src={`/partners/vogue.png`}
          loading="lazy"
        />

        <PartnerImg
          src={`/partners/womenshealth.png`}
          loading="lazy"
          className="animate-image-grow"
        />

        <a href="https://www.bbc.co.uk/programmes/p0b51t9l">
          <PartnerImg
            src={`/partners/bbc.png`}
            loading="lazy"
            className="animate-image-grow"
          />{" "}
        </a> */}
      </PartnerLogos>
    </Root>
  );
};

export default Media;
