import React, { useState, FC } from "react";
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

const SendButton = styled.button`
  background-color: ${colors.secondary};
  color: white;
  padding: 0px 20px;
  height: 40px;
  border-radius: 6px;
  margin: 10px auto;
  border: 2px solid;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  font-size: 15px;
  :hover {
    background-color: white;
    color: ${colors.secondary};
  }
`;

const SignUpSuccess = styled.div`
  background-color: #18bd5b;
  color: white;
  width: 150px;
  border-radius: 6px;
  padding: 0px 20px;
  font-size: 15px;
  height: 40px;
  display: flex;
  margin: 10px auto;
  justify-content: center;
  align-items: center;
  border: 2px solid;
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

const SignUp: FC = () => {
  const [toggleContactSuccess, setContactSuccess] = useState(false);

  const formSubmit = (e) => {
    e.preventDefault();
    setContactSuccess(true);
    console.log("contact submitted");
  };

  return (
    <SignUpSlice>
      <SignUpBox>
        <Title>Join Us</Title>
        <SliceContent>
          Sign up with your email address to receive news updates and blog posts
          from The Grief Gang.
        </SliceContent>
        <form
          name="contact"
          action="/"
          onSubmit={formSubmit}
          method="POST"
          data-netlify="true"
        >
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
            {!toggleContactSuccess && (
              <SendButton type="submit">Sign up</SendButton>
            )}
            {toggleContactSuccess && <SignUpSuccess>Thank You</SignUpSuccess>}
          </InputSubmitPair>
        </form>
      </SignUpBox>
    </SignUpSlice>
  );
};

export default SignUp;
