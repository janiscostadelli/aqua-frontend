import { Button } from "@material-ui/core";
import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: #5c6bc0;
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 50px;
`;

export const StyledButton = styled(Button)`
  color: white;
  border-color: white;
  transition: 500ms;
  :hover {
    color: #ffffff;
  }
`;
export const Logo = styled.img`
  width: 50px;
`;

export const Title = styled.h1`
  font-size: 20px;
  font-family: "Oswald";
  color: #ffffff;
`;

export const LogoContainer = styled.div`
  display: flex;
  gap: 10px;
`;
