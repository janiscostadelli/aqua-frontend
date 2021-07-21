import { MainContainer } from "./styled";
import React from "react";
import SignUpForm from "./SignUpForm";
import Header from "../../components/Header/Header";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

const SignUpPage = () => {
  useUnprotectedPage()
 
  return (
    <MainContainer>
      <Header />
      <SignUpForm />
    </MainContainer>
  );
};
export default SignUpPage;