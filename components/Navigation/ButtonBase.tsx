import React, { Component, FC } from "react";
import styled from "styled-components";
import colors from "../../styles/colors";

const Button = styled.a`
  background-color: ${colors.secondary};
  color: white;
  padding: 4px 20px;
  height: 40px;
  border-radius: 6px;
  margin: 10px 20px;
  border: 2px solid;
  font-size: 15px;
`;

const ButtonBase: FC = () => {
    return (
<Button />
    );
  };
  
  export default ButtonBase;

  