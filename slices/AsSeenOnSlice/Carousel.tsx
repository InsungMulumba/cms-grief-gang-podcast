import styled from "styled-components";
import { FC } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

const Root = styled.div`
  &&& {
    width: 100%;
    @media (min-width: 1280px) {
      width: 30%;
      height: 700px;
    }
  }
`;

const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  @media (min-width: 1280px) {
  }
  object-fit: cover;
`;
const Carousel: FC = () => {
  const images = [
    "/Carousel/media-1.webp",
    "/Carousel/media-2.webp",
    "/Carousel/media-3.webp",
    "/Carousel/media-4.webp",
  ];

  const [refCallback, slider] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <Root ref={refCallback} className="keen-slider">
      {images &&
        images.map((i) => {
          return (
            <div className="keen-slider__slide">
              <CarouselImage src={i} />
            </div>
          );
        })}
    </Root>
  );
};
export default Carousel;
