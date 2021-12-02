import { Component } from "react";
import { RouteObject } from "react-router";
import CreateLobby from "../components/CreateLobby";
import Game from "../components/Game";
import JoinLobby from "../components/JoinLobby";
import Landing from "../components/Landing";
import MissingPage from "../components/MissingPage";

const router: RouteObject[] = [
  { path: "/", element: <Landing />},
  { path: "/join", element: <JoinLobby />},
  { path: "/lobby/:id", element: <CreateLobby />},
  { path: "/game", element: <Game />},
  { path: "*", element: <MissingPage />}
]

export default router;