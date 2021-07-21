import { MainContainer } from "./styled";
import React from "react";
import LoginForm from "./LoginForm";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import Header from '../../components/Header/Header.js';

const Login = () => {
  useUnprotectedPage()

  return (
    <MainContainer>
      <Header />
      <LoginForm />
    </MainContainer>
  );
};
export default Login;
