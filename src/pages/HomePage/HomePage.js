import React, { useState, useEffect } from "react";
import MusicCard from "../../components/MusicCard/MusicCard";
import Header from "../../components/Header/Header";
import PopPop from "react-poppop";
import useProtectedPage from "../../hooks/useProtectedPage";
import {
  MainContainer,
  Title,
  StyledAddIcon,
  SubContainer,
  StyledSearch,
  Section,
  SearchContainer,
  SearchTextField,
  StyledTextField,
  MusicsContainer,
  StyledForm,
} from "./styled.js";
import PlaylistsMenu from "../../components/PlaylistsMenu/PlaylistsMenu";
import { createMusic, searchMusic } from "../../services/music";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Button, IconButton } from "@material-ui/core";
import useForm from "../../hooks/useForm";

const HomePage = () => {
  useProtectedPage();
  const [playlist, setPlaylist] = useState({
    id: "",
    name: "",
  });
  const [musics, setMusics] = useState([]);
  const [inputText, setInputText] = useState("");
  const [modal, setModal] = useState(false);
  const [form, onChange] = useForm({
    name: "",
    artist: "",
    url: "",
    genre: "",
  });

  const onSubmitForm = (event) => {
    event.preventDefault();
    createMusic({...form, playlistId: playlist.id});
  };

  useEffect(async () => {
    setMusics(
      await searchMusic({ playlistId: playlist.id, inputText: inputText })
    );
  }, [playlist]);

  const search = async () => {
    setMusics(
      await searchMusic({ playlistId: playlist.id, inputText: inputText })
    );
  };

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
            <SearchTextField
              placeholder="Busque por músicas ou artistas"
              variant="outlined"
              margin="dense"
              value={inputText}
              onChange={(e) => {
                setInputText(e.target.value);
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton onClick={search}>
                      <StyledSearch />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </SearchContainer>
          <Title>{playlist.name}</Title>
          <MusicsContainer>
            {renderMusics}
            <PopPop
              contentStyle={{ overflow: "hidden" }}
              position="centerCenter"
              open={modal}
              onClose={() => {
                document.body.style.overflow = "auto";
                setModal(false);
              }}
              closeOnEsc={true}
            >
              <StyledForm onSubmit={onSubmitForm}>
                <Title>Adicionar música</Title>
                <StyledTextField
                  name="name"
                  onChange={onChange}
                  placeholder="Música"
                  variant="outlined"
                  margin="dense"
                  required
                />
                <StyledTextField
                  name="artist"
                  onChange={onChange}
                  placeholder="Artista"
                  variant="outlined"
                  margin="dense"
                  required
                />
                <StyledTextField
                  name="url"
                  onChange={onChange}
                  placeholder="Link do Spotify"
                  variant="outlined"
                  margin="dense"
                  required
                />
                <StyledTextField
                  name="genre"
                  onChange={onChange}
                  placeholder="Gênero"
                  variant="outlined"
                  margin="dense"
                  required
                />
                <Button variant="contained" color="primary" type="submit">
                  Criar
                </Button>
              </StyledForm>
            </PopPop>
          </MusicsContainer>
          <IconButton>
            <StyledAddIcon onClick={() => setModal(true)} />
          </IconButton>
        </SubContainer>
      </Section>
    </MainContainer>
  );
};

export default HomePage;
