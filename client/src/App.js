import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage/HomePage";
import Header from "./components/Header/Header";
import Bookmark from "./pages/Bookmark/Bookmark";
import { WeatherProvider } from "./contexts/WeatherContext";

const App = () => {
  return (
    <WeatherProvider>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bookmark" element={<Bookmark />} />
      </Routes>
    </WeatherProvider>
  );
};

export default App;
