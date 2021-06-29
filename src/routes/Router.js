import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CreateMusicPage from "../pages/CreateMusicPage/CreateMusicPage";
import MusicDetailsPage from "../pages/MusicDetailsPage/MusicDetailsPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import MusicsPage from "../pages/MusicsPage/MusicsPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login">
          <LoginPage />
        </Route>

        <Route exact path="/cadastro">
          <SignUpPage />
        </Route>

        <Route exact path="/">
          <MusicsPage />
        </Route>

        <Route exact path="/criar-musica">
          <CreateMusicPage />
        </Route>

        <Route exact path="/musicas/:id">
          <MusicDetailsPage />
        </Route>

        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
