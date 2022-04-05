import AccordionItem from "./AccordionItem";
import React, { Component, FC, useEffect } from "react";

interface AccordionProps {
  items: {
    header: String;
    content: String;
  }[];
}

const Accordion: FC<AccordionProps> = ({ items }) => {
  return (
    <ul className="accordion">
      {items.map((item, index) => (
        <AccordionItem key={index} item={item} />
      ))}
    </ul>
  );
};

export default Accordion;
