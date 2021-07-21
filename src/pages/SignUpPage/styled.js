import styled from "styled-components";
import { TextField } from '@material-ui/core'
import { backgroundColor } from "../../constants/colors";
import { Button } from "@material-ui/core";

export const MainContainer = styled.div`
  background-color: ${backgroundColor};
  height: 100vh;
  display: flex;
  flex-direction: column;
`;


export const Form = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-top: -70px;
`;

export const Title = styled.h1`
  font-size: 30px;
  color: rgba(0, 0, 0, 0.6);
  font-family: "Oswald";
`;

export const StyledTextField = styled(TextField)`
  background-color: white;
  border-radius: 5px;
  width: 300px;
`;

export const ButtonsContainer = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
  font-family: "Oswald";
  padding: 10px 0px;
  gap: 20px;
  margin: 15px;
`;

export const StyledBackButton = styled(Button)`
  background-color: white;
  width: 50%;
`;

export const StyledSignupButton = styled(Button)`
  width: 50%;
`;
