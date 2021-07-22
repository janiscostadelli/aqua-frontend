import React, { useState } from "react";
import {
  MainContainer,
  MusicContainer,
  Title,
  SubTitle,
  IconsContainer,
  StyledPlayIcon,
  StyledFavoriteBorderIcon,
} from "./styled.js";
import PopPop from "react-poppop";
import { IconButton } from "@material-ui/core";

const MusicCard = (props) => {
  const [modal, setModal] = useState(false);
  const data = new Date(props.music.date);

  return (
    <>
      <MainContainer>
        <Title>Publicado por: {props.music.user_nickname}</Title>
        <SubTitle>
          {props.music.name} - {props.music.artist}
        </SubTitle>
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
            <b>Artista:</b>
            {props.music.artist}
          </p>
          <p>
            <b>Genêro:</b> {props.music.genre}
          </p>
          <p>
            <b>Data de publicação:</b> {data.getDate()}/{data.getMonth() + 1}/
            {data.getFullYear()}
          </p>
          <audio controls>
            <source src={props.music.url} type="audio/mpeg" />
          </audio>
          <p>
            <b>Publicado por:</b> {props.music.user_nickname}
          </p>
        </MusicContainer>
      </PopPop>
    </>
  );
};

export default MusicCard;
