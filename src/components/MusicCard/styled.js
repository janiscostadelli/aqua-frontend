import styled from "styled-components";

export const MainContainer = styled.div`
  height: 100px;
  width: 70vw;
  margin: 10px;
  background-color: #5C6BC0;
  color: #292929;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: 500ms;
  :hover {
    cursor: pointer;
    height: 120px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  }
`;

export const Title = styled.h5`
  margin: 0px;
  font-size: 20px;
  font-family: "Oswald";
  font-weight: 300;
  color: white;
`;

export const SubTitle = styled.h6`
  margin: 0px;
  font-size: 16px;
  font-family: "Oswald";
  font-weight: 200;
  color: white;
`