import { MainContainer } from "./styled";
import React from "react";
import SignUpForm from "./SignUpForm";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

const SignUpPage = () => {
  useUnprotectedPage()
 
  return (
    <MainContainer>
      <SignUpForm />
    </MainContainer>
  );
};
export default SignUpPage;