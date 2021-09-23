import styled from "styled-components";

const TitleH1 = styled.h1`
  font-family: "Noto Sans", sans-serif;
  font-size: 80px;

  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);
  @media (max-width: 1279px) {
    font-size: 40px;
  }
`;

export const TitleH2 = styled.h2`
  font-family: "Noto Sans", sans-serif;
  font-size: 64px;
  text-shadow: 3px 4px 3px rgba(0, 0, 0, 0.2);

  @media (max-width: 1279px) {
    font-size: 32px;
    text-align: center;
  }
`;

export const SliceContent = styled.p`
  text-align: center;
  font-size: 20px;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);
  margin: 0;
  margin-bottom: 16px;
  color: white;
  font-family: "Noto Sans", sans-serif;
`;

export default TitleH1;
