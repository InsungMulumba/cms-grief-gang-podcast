import React, { Component, FC } from "react";
import styled from "styled-components";
import { TitleH2, SliceContent } from "styles/headings";
import colors from "../../styles/colors";

const SignUpSlice = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 80px;
  background-color: ${colors.secondary};
`;

const SignUpBox = styled.div`
  /* background-color: white; */
  display: flex;
  flex-direction: column;
`;

const Title = styled(TitleH2)`
  text-align: center;

  color: white;
  font-family: " Spartan", sans-serif;
`;

const Content = styled.p`
  text-align: center;
  font-size: 20px;

  color: white;
  font-family: " Spartan", sans-serif;
`;

const ContactInput = styled.input`
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: solid 1px black;
  border-radius: 5px;
  margin: 10px 20px;

  height: 40px;
  :hover {
    border-top: solid 1px black;
    border-left: solid 1px black;
    border-right: solid 1px black;
  }
`;

const SendButton = styled.input`
  background-color: ${colors.secondary};
  color: white;
  padding: 4px 20px;
  height: 40px;
  border-radius: 6px;
  margin: 10px 20px;
  border: 2px solid;
  font-size: 15px;
`;

const InputSubmitPair = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

// interface SignUpProps {
//   data: string;
// }

const SignUp: FC = () => {
  //   console.log(`asc ${SignUpSliceContent}`);
  return (
    <SignUpSlice>
      <SignUpBox>
        <Title>Join Us</Title>
        <SliceContent>
          Sign up with your email address to receive recent news and blog posts
          from The Grief Gang.
        </SliceContent>
        <InputSubmitPair>
          <ContactInput type="email" placeholder="Email" name="user_email" />
          <SendButton type="submit" value="Submit" />
        </InputSubmitPair>
      </SignUpBox>
    </SignUpSlice>
  );
};

export default SignUp;
