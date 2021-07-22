import React, { useState, useEffect } from "react";
import MusicCard from "../../components/MusicCard/MusicCard";
import Header from "../../components/Header/Header";
import useProtectedPage from "../../hooks/useProtectedPage";
import {
  MainContainer,
  Title,
  StyledAddIcon,
  SubContainer,
  StyledSearch,
  Section,
  SearchContainer,
  StyledTextField,
  MusicsContainer,
} from "./styled.js";
import PlaylistsMenu from "../../components/PlaylistsMenu/PlaylistsMenu";
import { searchMusic } from "../../services/music";
import InputAdornment from "@material-ui/core/InputAdornment";
import { IconButton } from "@material-ui/core";

const HomePage = () => {
  useProtectedPage();
  const [playlist, setPlaylist] = useState({
    id: "",
    name: "",
  });
  const [musics, setMusics] = useState([]);
  const [inputText, setInputText] = useState("");

  useEffect(async () => {
    setMusics(await searchMusic({ playlistId: playlist.id, inputText: "" }));
  }, [playlist]);

  const renderMusics = musics.map((music) => {
    return <MusicCard key={music.id} music={music} />;
  });

  return (
    <MainContainer>
      <Header logged />
      <Section>
        <PlaylistsMenu setPlaylist={setPlaylist} />
        <SubContainer>
          <SearchContainer>
            <StyledTextField
              placeholder="Busque por músicas ou artistas"
              variant="outlined"
              margin="dense"
              value={inputText}
              onChange={(e)=>{setInputText(e.target.value)}}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton>
                      <StyledSearch />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </SearchContainer>
          <Title>{playlist.name}</Title>
          <MusicsContainer>{renderMusics}</MusicsContainer>
          <IconButton>
            <StyledAddIcon />
          </IconButton>
        </SubContainer>
      </Section>
    </MainContainer>
  );
};

export default HomePage;
