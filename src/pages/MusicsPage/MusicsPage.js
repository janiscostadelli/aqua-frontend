import React from "react";
import MusicCard from "../../components/MusicCard/MusicCard";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";
import { MainContainer, Title, MusicsContainer } from './styled.js'


const MusicsPage = () => {
  useProtectedPage();
  const musics = useRequestData([], `${BASE_URL}/music/all`)
  const musicCards = musics.map((music, index) => {
    return <MusicCard key={index} title={music.title} author="autor" date={music.date} file={music.file} genero="rock" album="abbey road"/>
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