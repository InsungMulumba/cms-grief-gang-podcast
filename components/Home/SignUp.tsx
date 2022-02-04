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
  max-width: 100%;
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
  margin: 10px auto;
  border: 2px solid;
  width: fit-content;
  font-size: 15px;
`;
const InputPair = styled.div`
  display: flex;
  justify-content: center;
`;
const InputSubmitPair = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  flex-direction: column;
`;

// interface SignUpProps {
//   data: string;
// }

const SignUp: FC = () => {
  return (
    <SignUpSlice>
      <SignUpBox>
        <Title>Join Us</Title>
        <SliceContent>
          Sign up with your email address to receive recent news and blog posts
          from The Grief Gang.
        </SliceContent>
        <form name="contact" action="#" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <InputSubmitPair>
            <InputPair>
              <ContactInput
                type="email"
                placeholder="Email"
                name="email"
                id="youremail"
              />
              <ContactInput
                type="text"
                placeholder="Name"
                name="name"
                id="yourname"
              />
            </InputPair>
            <SendButton type="submit" />
          </InputSubmitPair>
        </form>
      </SignUpBox>
    </SignUpSlice>
  );
};

export default SignUp;
