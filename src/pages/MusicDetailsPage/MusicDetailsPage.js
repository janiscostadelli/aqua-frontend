import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";

const MusicDetailsPage = () => {
  useProtectedPage();
  return (
  
      <h1>MusicDetailsPage</h1>
    
  );
};

export default MusicDetailsPage;
