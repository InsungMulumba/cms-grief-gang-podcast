import styled from "styled-components";

 const TitleH1 = styled.h1`
  font-family: "Noto Sans", sans-serif;
  font-size: 80px;

  @media (max-width: 1280px) {
    font-size: 40px;
  }
`;

export const TitleH2 = styled.h2`
font-family: "Noto Sans", sans-serif;
font-size: 64px;

@media (max-width: 1280px) {
  font-size: 32px;
  text-align: center;
}
`;


export default TitleH1;