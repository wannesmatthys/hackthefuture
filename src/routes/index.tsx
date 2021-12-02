import { Component } from "react";
import { RouteObject } from "react-router";
import Lobby from "../components/Lobby";
import Game from "../components/Game";
import JoinLobby from "../components/JoinLobby";
import Landing from "../components/Landing";
import MissingPage from "../components/MissingPage";

const router: RouteObject[] = [
  { path: "/", element: <Landing />},
  { path: "/join", element: <JoinLobby />},
  { path: "/lobby/:lobbyCode", element: <Lobby />},
  { path: "/game", element: <Game />},
  { path: "*", element: <MissingPage />}
]

export default router;