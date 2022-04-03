import React, { useState, FC } from "react";
import styled from "styled-components";
import { TitleH2, SliceContent } from "styles/headings";
import colors from "../../styles/colors";
import { validate } from "email-validator";

const SignUpSlice = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 80px;
  background-color: ${colors.tertiary};
`;

const SignUpBox = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled(TitleH2)`
  text-align: center;

  color: #ed693c;
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
  background-color: ${colors.mainPink};
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

const ErrorMessage = styled.span`
  color: red;
  text-align: center;
  font-size: 20px;
`;

const SignUp: FC = () => {
  interface FormPost {
    name?: string;
    email?: string;
  }

  // Thanks to Ju-LI https://jama-ai.medium.com/next-js-typescript-netlify-forms-the-no-redirect-version-d9bf859502cd
  const [formState, setFormState] = useState<FormPost>();
  const [submitted, setContactSuccess] = useState(false);
  const [showEmailErrorMessage, setShowEmailErrorMessage] =
    useState<boolean>(false);
  const [showNameErrorMessage, setShowNameErrorMessage] =
    useState<boolean>(false);
  const encode = (data: any) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const formSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log(encode({ "form-name": "contact", ...formState }));
    event.preventDefault();

    if (!validate(formState?.email) || !formState.email) {
      event.preventDefault();
      setShowEmailErrorMessage(true);
      return;
    }

    if (formState.name?.length < 2 || !formState.name) {
      event.preventDefault();
      setShowNameErrorMessage(true);
      return;
    }

    if (process.env.NODE_ENV === "production") {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...formState }),
      })
        .then(() => console.log("Success!"))
        .catch((error) => console.log(error));
    }

    setContactSuccess(true);
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };
  return (
    <SignUpSlice>
      <SignUpBox>
        <Title>Keep Me Posted</Title>
        <SliceContent>
          Sign up with your email address to receive news updates and blog posts
          from The Grief Gang.
        </SliceContent>
        <form
          name="contact"
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
                id="email"
                onChange={handleChange}
              />
              <ContactInput
                type="text"
                placeholder="Name"
                name="name"
                id="name"
                onChange={handleChange}
              />
            </InputPair>
            {!submitted && <SendButton type="submit">Sign up</SendButton>}
            {submitted && <SignUpSuccess>Thank You!</SignUpSuccess>}
            {showEmailErrorMessage && (
              <ErrorMessage>Please use a valid email address</ErrorMessage>
            )}
            {showNameErrorMessage && (
              <ErrorMessage>Please enter a name</ErrorMessage>
            )}
          </InputSubmitPair>
        </form>
      </SignUpBox>
    </SignUpSlice>
  );
};

export default SignUp;
