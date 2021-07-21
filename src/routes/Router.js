import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CreateMusicPage from "../pages/CreateMusicPage/CreateMusicPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import HomePage from "../pages/HomePage/HomePage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/entrar">
          <LoginPage />
        </Route>

        <Route exact path="/cadastro">
          <SignUpPage />
        </Route>

        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/criar-musica">
          <CreateMusicPage />
        </Route>

        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
