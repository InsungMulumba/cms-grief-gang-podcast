import styled from "styled-components";

const TitleH1 = styled.h1`
  font-family: "Spartan", sans-serif;
  font-size: 44px;
  margin: 0px;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);
  margin-top: 0px;
  &&& {
    margin-bottom: 12px;
  }
  @media (max-width: 1279px) {
    font-size: 36px;
  }
`;

export const SubTitle = styled.h3`
  font-size: 32px;
  font-family: "Spartan", sans-serif;

  margin-top: 0px;
  &&& {
    margin-bottom: 12px;
  }

  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);
  @media (max-width: 1279px) {
    font-size: 24px;
  }
`;

export const TitleH2 = styled.h2`
  font-family: "Spartan", sans-serif;
  font-size: 64px;
  text-shadow: 3px 4px 3px rgba(0, 0, 0, 0.1);

  @media (max-width: 1279px) {
    font-size: 32px;
    text-align: center;
  }
`;

export const SliceContent = styled.p`
  text-align: center;
  font-size: 20px;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);
  margin: 0;
  margin-bottom: 16px;
  color: #ed693c;
  font-family: "Spartan", sans-serif;
`;

export default TitleH1;
