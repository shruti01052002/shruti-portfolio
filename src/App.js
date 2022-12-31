import React from "react";
import LandingPage from './LandinPage';
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
    <BrowserRouter>
    <LandingPage/>
    </BrowserRouter>
    </>
  );
}

export default App;