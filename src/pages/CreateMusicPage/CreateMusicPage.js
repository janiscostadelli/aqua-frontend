import React from "react";
import { MainContainer } from "./styled";
import Header from "../../components/Header/Header";
import CreateMusicForm from "./CreateMusicForm";
import useProtectedPage from "../../hooks/useProtectedPage";

const CreateMusicPage = () => {
  useProtectedPage();

  return (
    <MainContainer>
      <Header />
      <CreateMusicForm />
    </MainContainer>
  );
};
export default CreateMusicPage;
