import styled from "styled-components";
import { TextField } from "@material-ui/core";

export const MainContainer = styled.div`
  background-color: #e8eaf6;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  height: 500px;
  width: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

export const Title = styled.h1`
  font-size: 24px;
`;

export const Logo = styled.img`
  width: 100px;
  margin-top: 50px;
  margin: 30px;
`;

export const ButtonsContainer = styled.div`
  width: 238px;
  display: flex;
  justify-content: space-between;
  font-family: "Oswald";
  padding: 10px 0px;
  gap: 20px;
  margin: 15px;
`;

export const StyledTextField = styled(TextField)`
  background-color: white;
  border-radius: 5px;
`;
