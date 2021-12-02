import { Component } from "react";
import { RouteObject } from "react-router";
import CreateLobby from "../components/CreateLobby";
import JoinLobby from "../components/JoinLobby";
import Landing from "../components/Landing";
import MissingPage from "../components/MissingPage";

const router: RouteObject[] = [
  { path: "/", element: <Landing />},
  { path: "/join", element: <JoinLobby />},
  { path: "/create", element: <CreateLobby />},
  { path: "*", element: <MissingPage />}
]

export default router;