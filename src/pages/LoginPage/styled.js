import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: #067e98;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  height: 500px;
  width: 550px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 25px;
  box-shadow: 10px 10px 25px rgba(0, 0, 0, 0.4);
`;

export const Title = styled.h1`
  margin: 0px;
  font-size: 48px;
  color: #424242;
  font-family: "Oswald";
`;

export const Logo = styled.img`
  width: 100px;
  margin-top: 50px;
`;

export const ButtonsContainer = styled.div`
  width: 220px;
  display: flex;
  justify-content: space-between;
  font-family: "Oswald";
  padding: 10px 0px;
  gap: 20px;
`;
