import React from "react";
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import router from "./routes";

function App() {
    let routes = useRoutes(router);
    return routes;
}

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;