import styled, { keyframes } from "styled-components";
import { FC, useEffect } from "react";
import { TitleH2 } from "styles/headings";


// interface contentfulDataTypes {
//   mediaLink: string;
//   mediaName: string;
// }

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 40px;
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
    height: 120px;
    width: 120px;
  }

  @media (max-width: 1279px) {
    height: 120px;
    width: 120px;
  }
`;

interface mediaProps {
  data: string
}


const Media: FC<mediaProps> = ({ data }) => {

  useEffect(() => {
    console.log(data);
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
          // console.log("out of view");
        }
      });
    });

    observer.observe(myImg[0]);
  }, []);

  return (
    <Root>
      <TitleH2>As seen on</TitleH2>
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


