import React from "react";
import {MainContainer} from "./styled";
import CreateMusicForm from "./CreateMusicForm";
import useProtectedPage from "../../hooks/useProtectedPage";


const CreateMusicPage = () => {
  useProtectedPage()
 
  return (
    <MainContainer>
      <CreateMusicForm />
    </MainContainer>
  );
};
export default CreateMusicPage;