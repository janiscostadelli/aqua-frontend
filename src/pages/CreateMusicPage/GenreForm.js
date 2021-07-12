import { Checkbox, FormControlLabel } from "@material-ui/core";
import React from "react";

const GenreForm = () => {
  return (
    <>
      <FormControlLabel
        control={<Checkbox name="funk" color="primary" />}
        label="Funk"
      />
      <FormControlLabel
        control={<Checkbox name="kpop" color="primary" />}
        label="K-pop"
      />
      <FormControlLabel
        control={<Checkbox name="rock" color="primary" />}
        label="Rock"
      />
    </>
  );
};

export default GenreForm;