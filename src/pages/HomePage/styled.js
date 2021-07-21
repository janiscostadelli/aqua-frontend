import styled from 'styled-components';
import { backgroundColor } from '../../constants/colors';

export const MainContainer = styled.div`
min-height: 100vh;
display: flex;
flex-direction: column;
`

export const Section = styled.section`
  flex:1;
  display: flex;
`

export const MusicsContainer = styled.div`
flex: 1;
background: ${backgroundColor};
`