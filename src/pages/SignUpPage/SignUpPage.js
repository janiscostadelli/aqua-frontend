import { useHistory } from "react-router-dom";
import { MainContainer } from "./styled";
import React from "react";
import SignUpForm from "./SignUpForm";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

const SignUpPage = () => {
  useUnprotectedPage();
  const history = useHistory();
 
  return (
    <MainContainer>
      <SignUpForm>
      
        </SignUpForm>
    </MainContainer>
  );
};
export default SignUpPage;