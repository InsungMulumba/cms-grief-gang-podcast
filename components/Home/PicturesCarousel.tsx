import React, { Component, FC } from "react";
import Carousel from "react-elastic-carousel";
import styled from "styled-components";
import colors from "../../styles/colors";

const Item = styled.div`
  /* width: 100px;
  height: 100px; */
  /* background-color: purple; */
  color: white;
`;

const CarouselContainer = styled(Carousel)`
  .rec-arrow {
    display: none;
  }

  .rec-dot_active {
    background-color: ${colors.mainPink};
    box-shadow: 0 0 1px 3px black;
  }
`;

const CarouselImage = styled.img`
  width: 320px;
  height: 320px;
  @media (max-width: 480px) {
    width: auto;
    height: 250px;
  }
`;

const pictures = [
  "pic-1.jpeg",
  "pic-2.jpeg",
  "pic-3.jpeg",
  "pic-4.jpeg",
  "pic-5.jpeg",
  "pic-6.jpeg",
];

const PicturesCarousel: FC = () => {
  let itemsToShow = 1;

  if (typeof window !== "undefined") {
    // detect window screen width function
    itemsToShow = window.innerWidth < 767 ? 1 : 3;
  }

  return (
    <>
      <CarouselContainer
        isRTL={false}
        itemsToShow={itemsToShow}
        // enableAutoPlay
        // autoPlaySpeed={4500}
      >
        <Item>
          
          <CarouselImage
            src={`/carousel/pic-1.jpg`}
            loading="lazy"
          />
        </Item>
        <Item>2</Item>
        <Item>3</Item>
        <Item>4</Item>
        <Item>5</Item>
        <Item>6</Item>
        <Item>7</Item>
        <Item>8</Item>
        <Item>9</Item>
      </CarouselContainer>
    </>
  );
};

export default PicturesCarousel;
