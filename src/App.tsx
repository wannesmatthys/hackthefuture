import React from "react";
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import Header from "./components/base/Header";
import router from "./routes";

function App() {
    return useRoutes(router);
}

const AppWrapper = () => {
  return (
    <div>
      <Router>
        <Header title="HFT" />
        <App />
      </Router>
    </div>
  );
};

export default AppWrapper;