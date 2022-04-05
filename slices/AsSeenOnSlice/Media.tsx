import styled, { keyframes } from "styled-components";
import { FC, useEffect } from "react";
import { TitleH2 } from "styles/headings";
import colors from "../../styles/colors";

const Text = styled.p`
  font-family: " Spartan", sans-serif;
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
  @media (min-width: 767px) {
    flex-direction: row;
    margin: 20px 0px 40px;
    display: flex;
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;

const PartnerImg = styled.img`
  margin: 0px 20px;
  &.image-grow {
    animation: ${imageGrow} 3.5s ease-out 0.5s both;
  }
  @media (min-width: 1280px) {
    height: 180px;
    width: 180px;
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
        <PartnerImg
          className="animate-image-grow"
          src={`/partners/dougyCentre.png`}
          loading="lazy"
        />
        <PartnerImg
          src={`/partners/theLossProject.png`}
          loading="lazy"
          className="animate-image-grow"
        />

        <PartnerImg
          src={`/partners/bbc.png`}
          loading="lazy"
          className="animate-image-grow"
        />
      </PartnerLogos>
    </Root>
  );
};

export default Media;
