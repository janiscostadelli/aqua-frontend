import React from "react";
import SkyLight from "react-skylight";
import { MainContainer, Title, SubTitle } from "./styled.js";

const MusicCard = (props) => {
  let simpleDialog;

  return (
    <>
      <MainContainer onClick={() => simpleDialog.show()}>
        <Title>{props.title}</Title>
        <SubTitle>{props.author}</SubTitle>
      </MainContainer>
      <SkyLight 
        hideOnOverlayClicked
        ref={(ref) => (simpleDialog = ref)}
        title={props.title}
      >
          <audio controls>
            <source src={props.file} type="audio/mpeg" />
          </audio> 
          <p>data: {props.date}</p>
          <p>genero: {props.genero}</p>
          <p>album: album</p>
      </SkyLight>
    </>
  );
};

export default MusicCard;
