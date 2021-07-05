import { MainContainer } from "./styled";
import React from "react";
import LoginForm from "./LoginForm";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

const Login = () => {
  useUnprotectedPage()

  return (
    <MainContainer>
      <LoginForm />
    </MainContainer>
  );
};
export default Login;
