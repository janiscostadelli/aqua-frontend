import React, { useState } from "react";
import {
  MainContainer,
  MusicContainer,
  Title,
  SubTitle,
  Notice,
  IconsContainer,
  StyledPlayIcon,
  StyledFavoriteBorderIcon,
  TextContainer,
} from "./styled.js";
import PopPop from "react-poppop";
import { IconButton } from "@material-ui/core";

const MusicCard = (props) => {
  const [modal, setModal] = useState(false);
  const data = new Date(props.music.date);
  const url = props.music.url.replace(
    "https://open.spotify.com/track/",
    "https://open.spotify.com/embed/track/"
  );

  return (
    <>
      <MainContainer>
        <TextContainer>
          <Title>Publicado por: {props.music.user_nickname}</Title>
          <SubTitle>
            {props.music.name} - {props.music.artist}
          </SubTitle>
        </TextContainer>
        <IconsContainer>
          <IconButton>
            <StyledFavoriteBorderIcon />
          </IconButton>
          <IconButton onClick={() => setModal(true)}>
            <StyledPlayIcon />
          </IconButton>
        </IconsContainer>
      </MainContainer>
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
        <MusicContainer>
          <p>
            <b>Musica:</b> {props.music.name}
          </p>
          <p>
            <b>Artista:</b> {props.music.artist}
          </p>
          <p>
            <b>Genêro:</b> {props.music.genre}
          </p>
          <p>
            <b>Data de publicação:</b> {data.getDate()}/{data.getMonth() + 1}/
            {data.getFullYear()}
          </p>
          <iframe
            src={url}
            height="80"
            volume={20}
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
          <p>
            <b>Publicado por:</b> {props.music.user_nickname}
          </p>
          <Notice>
            Verifique se você está logado no Spotify do navegador para ouvir a
            música
          </Notice>
        </MusicContainer>
      </PopPop>
    </>
  );
};

export default MusicCard;
