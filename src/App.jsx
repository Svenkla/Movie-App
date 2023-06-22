import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { MovieInfo } from "./pages/MovieInfo";
import TopRatedMovies from "./pages/TopRatedMovies";
import UpcomingMovies from "./pages/UpcomingMovies";
import { DarkThemeContext } from "./context/DarkThemeContext";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <DarkThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
      <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/movieinfo/:id" element={<MovieInfo />} />
            <Route exact path="/toprated" element={<TopRatedMovies />} />
            <Route exact path="/upcoming" element={<UpcomingMovies />} />
          </Routes>
        </Router>
      </div>
    </DarkThemeContext.Provider>
  );
}

export default App;
