import { goToMusicsPage } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import error from "../../assets/error.png";
import React from "react";
import {
  ErrorImage,
  TextContainer,
  MainContainer,
  StyledText,
  SubContainer,
} from "./styled";

const ErrorPage = () => {
  const history = useHistory();
  return (
    <MainContainer>
      <SubContainer>
        <ErrorImage img src={error} />
        <TextContainer>
          <StyledText>Erro 404</StyledText>
          <StyledText>Ops, parece que essa página não existe!</StyledText>
        </TextContainer>
      </SubContainer>

      <Button
        variant="contained"
        color="neutral"
        onClick={() => goToMusicsPage(history)}
      >
        Voltar para a página inicial
      </Button>
    </MainContainer>
  );
};

export default ErrorPage;
