<<<<<<< HEAD
import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/base/Header'
=======
import React from "react";
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import router from "./routes";
>>>>>>> main

function App() {
    let routes = useRoutes(router);
    return routes;
}

const AppWrapper = () => {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-50">
      <Header title={"HTF"}/>
    </div>
  )
}
=======
    <Router>
      <App />
    </Router>
  );
};
>>>>>>> main

export default AppWrapper;