import { Button } from "@material-ui/core";
import styled from "styled-components";


export const MainContainer = styled.div`
  background-color: #5C6BC0;
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 50px;
  ` 

export const StyledButton = styled(Button)`
  color: white;
  border-color: white;
  transition: 500ms;
  :hover{
    color: #067e98;
  }
`
export const Logo = styled.img`
  width: 100px;
  margin-top: 50px;
  margin: 30px;
`;