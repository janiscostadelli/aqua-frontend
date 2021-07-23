import styled from "styled-components";
import { Button, TextField } from "@material-ui/core";
import { backgroundColor, neutralColor, primaryColor } from "../../constants/colors";

export const MainContainer = styled.div`
  width: 250px;
  background-color: ${neutralColor};
  overflow-y: scroll;
  height: 92vh;
  text-align: center;
`;

export const PlaylistTitle = styled.div`
  margin: 0px;
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 15px;
  font-size: 20px;
  font-family: "Oswald";
  color: rgba(0, 0, 0, 0.6);
  border-bottom: 1px solid ${backgroundColor};
  transition: 500ms;
  :hover {
    height: 60px;
    cursor: pointer;
    border-color: ${primaryColor};
    color: ${primaryColor};
  }
`;

export const StyledForm = styled.form`
display: flex;
flex-direction: column;
gap: 10px;
`

export const StyledTextField = styled(TextField)`
  background-color: white;
  border-radius: 5px;
  width: 300px;
`;

export const StyledButton = styled(Button)`
  margin: 10px;
`

export const Title = styled.p`
  margin: 0px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px; 
  font-weight: 600;
  font-family: "Oswald";
  color: ${primaryColor};
`