import { Component } from "react";
import { RouteObject } from "react-router";
import MissingPage from "../components/MissingPage";

const router: RouteObject[] = [
  { path: "*", element: <MissingPage />}
]

export default router;