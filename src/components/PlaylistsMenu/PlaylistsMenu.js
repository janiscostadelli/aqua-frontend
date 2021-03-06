import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { createPlaylist, getAllPlaylists } from "../../services/playlist";
import {
  MainContainer,
  PlaylistTitle,
  StyledForm,
  StyledTextField,
  StyledButton,
  Title,
} from "./styled";
import PopPop from "react-poppop";
import useForm from "../../hooks/useForm";

const PlaylistsMenu = (props) => {
  const [playlists, setPlaylists] = useState([]);
  const [modal, setModal] = useState(false);

  const [form, onChange] = useForm({
    name: "",
  });

  const onSubmitForm = (event) => {
    event.preventDefault();
    createPlaylist(form);
  };

  useEffect(async () => {
    const result = await getAllPlaylists();
    setPlaylists(result);
    result.length && props.setPlaylist({ id: result[0].id, name: result[0].name });
  }, []);

  return (
    <>
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
          <StyledTextField
            name="name"
            onChange={onChange}
            placeholder="Nome da playlist"
            variant="outlined"
            margin="dense"
            required
          />
          <Button variant="contained" color="primary" type="submit">
            Criar
          </Button>
        </StyledForm>
      </PopPop>
      <MainContainer>
        <Title>Playlists</Title>
        <StyledButton
          color="primary"
          variant="outlined"
          onClick={() => setModal(true)}
        >
          Nova Playlist
        </StyledButton>
        {playlists.map((playlist) => {
          return (
            <PlaylistTitle
              onClick={() => {
                props.setPlaylist({ id: playlist.id, name: playlist.name });
              }}
              key={playlist.id}
            >
              {playlist.name}
            </PlaylistTitle>
          );
        })}
      </MainContainer>
    </>
  );
};

export default PlaylistsMenu;
