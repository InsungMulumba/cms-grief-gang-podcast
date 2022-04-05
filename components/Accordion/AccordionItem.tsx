import React, { FC, useState, useRef } from "react";
import styled from "styled-components";
import colors from "../../styles/colors";

const Root = styled.li`
  border-top: 1px solid ${colors.burntOrange};

  .active .button {
    background-color: ${colors.cream};
  }
`;

const ItemButtom = styled.button`
  display: flex;
  flex-wrap: wrap;
`;

interface AccordionItemProps {
  item: {
    header: String;
    content: String;
  };
}

const AccordionItem: FC<AccordionItemProps> = ({ item }) => {
  const [clicked, setClicked] = useState(false);
  const contentEl = useRef<HTMLDivElement>();

  const scrollHeight = contentEl.current
    ? contentEl.current.scrollHeight
    : "150px";
  const { header, content } = item;

  const handleToggle = () => {
    setClicked((prev) => !prev);
  };

  return (
    <Root className={`${clicked ? "active" : ""}`}>
      <ItemButtom className="button" onClick={handleToggle}>
        {header}
        <span className="control">{clicked ? "—" : "+"} </span>
      </ItemButtom>

      <div
        ref={contentEl}
        className="answer_wrapper"
        style={clicked ? { height: scrollHeight } : { height: "0px" }}
      >
        <div className="answer">{content}</div>
      </div>
    </Root>
  );
};

export default AccordionItem;
