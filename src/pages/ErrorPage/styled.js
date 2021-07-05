import styled from "styled-components";

export const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #067e98;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextContainer = styled.div`
width: 550px;
`

export const StyledText = styled.h1`
  font-size: 32px;
  color: #424242;
  font-family: "Oswald";
`;

export const SubContainer = styled.div`
  height: 250px;
  width: 450px;
  margin: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 50px 0px 0px;
  gap: 20px;
`;

export const ErrorImage = styled.img`
  width: 100px;
  margin-top: 50px;
`;
