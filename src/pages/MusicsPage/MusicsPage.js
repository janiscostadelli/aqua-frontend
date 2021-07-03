import React from "react";
import MusicCard from "../../components/MusicCard/MusicCard";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";
import { MainContainer, Title, MusicsContainer } from './styled.js'

/*
modal = música, como ano, gênero e álbum. 
*/

const MusicsPage = () => {
  useProtectedPage();
  const musics = useRequestData([], `${BASE_URL}/music/all`)
  const musicCards = musics.map((music) => {
    return <MusicCard title={music.title} author="autor"/>
  })
  
  return (
    <MainContainer>
      <Title>Musicas</Title>
      <MusicsContainer>
       {musicCards}
      </MusicsContainer>
    </MainContainer>
  );
};

export default MusicsPage;