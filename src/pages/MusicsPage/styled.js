import styled from 'styled-components';

export const MainContainer = styled.div`
background-color: #067E98;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
`

export const Title = styled.h1`
font-size: 48px;
color: #424242;
font-family: "Oswald";
`

export const MusicsContainer = styled.section`
display: grid;
gap: 50px;
grid-template-columns: repeat(4,200px);
margin-bottom: 50px;
`