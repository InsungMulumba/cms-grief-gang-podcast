import React, { FC, useState, useRef } from "react";
import styled, { keyframes } from "styled-components";
import colors from "../../styles/colors";
import { fontSizes } from "styles/fontSizes";

const Root = styled.li<{
  scrollHeight: string;
}>`
  .active .button {
    background-color: ${colors.cream};
  }
  .open {
    height: 270px;
  }
`;

const ItemButton = styled.button`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  font-family: "Spartan", sans-serif;
  background-color: ${colors.cream};
  border: 1px solid grey;
  padding: 10px;

  span {
    margin: auto 0px;
    max-width: 80%;
  }
`;

const ItemText = styled.span`
  font-size: ${fontSizes.text};
`;

const ContentWrapper = styled.div`
  overflow: hidden;
  transition: height ease 0.2s;

  height: 0px;
  transition: 0.5s ease;
`;

const Content = styled.div`
  padding: 20px;
  font-family: "Spartan", sans-serif;
`;

interface AccordionItemProps {
  item: {
    question: String;
    answer: String;
    orderNumber: Number;
  };
}

const AccordionItem: FC<AccordionItemProps> = ({ item }) => {
  const [clicked, setClicked] = useState(false);
  const contentEl = useRef<HTMLDivElement>();

  const scrollHeight = contentEl.current
    ? contentEl.current.scrollHeight
    : "150px";
  const { question, answer } = item;

  const handleToggle = () => {
    setClicked((prev) => !prev);
  };

  return (
    <>
      <Root className={`${clicked ? "active" : ""}`}>
        <ItemButton className="button" onClick={handleToggle}>
          <span>{question}</span>
          <ItemText>{clicked ? "—" : "+"} </ItemText>
        </ItemButton>

        <ContentWrapper ref={contentEl} className={clicked ? "open" : ""}>
          <Content>{answer}</Content>
        </ContentWrapper>
      </Root>
    </>
  );
};

export default AccordionItem;
// https://codesandbox.io/s/cocky-brook-7i5eel?file=/src/components/AccordionItem.js
