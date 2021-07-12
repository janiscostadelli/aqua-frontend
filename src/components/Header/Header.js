import React from "react";
import { MainContainer, StyledButton, Logo } from "./styled";
import { useHistory } from "react-router-dom";
import { logout } from '../../services/user';
import logo from "../../assets/Logo.png";

const Header = () => {
  const history = useHistory();
  return (
    <MainContainer>
      <Logo src={logo}/>
      <StyledButton
        variant="outlined"
        color="primary"
        onClick={() => logout(history)}
      >
        Sair
      </StyledButton>
    </MainContainer>
  );
};

export default Header;
