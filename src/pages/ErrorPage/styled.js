import { backgroundColor } from "../../constants/colors";
import styled from "styled-components";
import { Button } from "@material-ui/core";

export const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${backgroundColor};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextContainer = styled.div`
  width: 50%;
`;

export const Title = styled.h1`
  font-size: 25px;
  color: rgba(0, 0, 0, 0.6);
  font-family: "Oswald";
`;

export const SubContainer = styled.div`
  margin-top: -70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  text-align: center;
  gap: 20px;
  flex: 1;
`;

export const ErrorImage = styled.img`
  width: 100px;
  margin-top: 50px;
`;

export const StyledLoginButton = styled(Button)`
  width: 70%;
`;
