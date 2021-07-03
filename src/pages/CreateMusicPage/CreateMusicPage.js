import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";

const CreateMusicPage = () => {
  useProtectedPage();
  return (

      <h1>CreateMusic</h1>
  );
};

export default CreateMusicPage;
