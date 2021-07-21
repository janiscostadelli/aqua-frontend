import React from "react";
import {
  MainContainer,
  StyledButton,
  Logo,
  Title,
  LogoContainer,
} from "./styled";
import { useHistory } from "react-router-dom";
import { logout } from "../../services/user";
import logo from "../../assets/Logo.png";

const Header = (props) => {
  const history = useHistory();
  return (
    <MainContainer>
      <LogoContainer>
        <Logo src={logo} />
        <Title>Aqua</Title>
      </LogoContainer>
      {props.logged ? (
        <StyledButton
          variant="outlined"
          color="primary"
          size="small"
          onClick={() => logout(history)}
        >
          Sair
        </StyledButton>
      ) : (
        <div />
      )}
    </MainContainer>
  );
};

export default Header;
