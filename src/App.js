import React from "react";
import { Router, Route, Routes } from "react-router-dom";

import Home from "./Home";
import MovieDetailsPage from "./components/MovieDetailsPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>} />
      <Route
        path="/MovieDetails/:imdbID"
        element={<MovieDetailsPage></MovieDetailsPage>}
        exact
      />
    </Routes>
  );
};

export default App;
