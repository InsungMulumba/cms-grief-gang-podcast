import AccordionItem from "./AccordionItem";
import React, { Component, FC, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { orderedContentfulEntries } from "../../utils/contentfulApi";

const Root = styled.ul`
  list-style: none;
  width: 100%;
  margin: 0px auto;
  padding: 0px;
`;

interface AccordionProps {
  items: {
    question: String;
    answer: String;
    orderNumber: Number;
  }[];
}

const Accordion: FC<AccordionProps> = ({ items }) => {
  const orderedItems = orderedContentfulEntries(items);

  return (
    <Root className="accordion">
      {orderedItems.map((item, index) => (
        <AccordionItem key={index} item={item} />
      ))}
    </Root>
  );
};

export default Accordion;
