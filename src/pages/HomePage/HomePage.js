import React, { useState } from "react";
import MusicCard from "../../components/MusicCard/MusicCard";
import Header from "../../components/Header/Header";
import useProtectedPage from "../../hooks/useProtectedPage";
import { MainContainer, Title, MusicsContainer, Section } from './styled.js'
import PlaylistsMenu from "../../components/PlaylistsMenu/PlaylistsMenu";


const HomePage = () => {
  useProtectedPage();
  const [playlist, setPlaylist] = useState({id: "a2663523-1596-4ca5-ab0b-7ca222c70766",name: "aidoru"});
  
  return (
    <MainContainer>
      <Header logged/>
      <Section>
        <PlaylistsMenu setPlaylist={setPlaylist}/>
        <MusicsContainer>
          estou na playlist {playlist.name}
        </MusicsContainer>
      </Section>
    </MainContainer>
  );
};

export default HomePage;