import React, { useState } from "react";
import { MainContainer, Title, SubTitle, ModalContainer } from "./styled.js";

const MusicCard = (props) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    alert('era pra abrir o modal agora')
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

return (
    <MainContainer onClick={handleOpen}>
      <Title>{props.title}</Title>
      <SubTitle>{props.author}</SubTitle>
    </MainContainer>
  );
};

export default MusicCard;
