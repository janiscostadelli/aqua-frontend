import { goToHomePage } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";
import error from "../../assets/error.png";
import React from "react";
import Header from "../../components/Header/Header";
import {
  ErrorImage,
  TextContainer,
  MainContainer,
  Title,
  SubContainer,
  StyledLoginButton,
} from "./styled";

const ErrorPage = () => {
  const history = useHistory();
  return (
    <MainContainer>
      <Header />
      <SubContainer>
        <ErrorImage img src={error} />
        <TextContainer>
          <Title>Ops, parece que essa página não existe!</Title>
        </TextContainer>

        <StyledLoginButton
          variant="outlined"
          color="primary"
          onClick={() => goToHomePage(history)}
        >
          Voltar para a página inicial
        </StyledLoginButton>
      </SubContainer>
    </MainContainer>
  );
};

export default ErrorPage;
