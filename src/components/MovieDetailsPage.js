import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetailsPage = () => {
  const { imdbID } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);
  //console.log(imdbID);

  useEffect(() => {
    getMovieDetails();
    console.log(movieDetails);
  }, [imdbID]);

  const getMovieDetails = async () => {
    const url = `https://www.omdbapi.com/?i=${imdbID}&apikey=7338b124`;
    const response = await fetch(url);

    const responseJson = await response.json();

    if (responseJson) {
      setMovieDetails(responseJson);
    }
  };

  return (
    <div>
      movie details {imdbID}
      {movieDetails.Title}
      {movieDetails.Year}
      {movieDetails.Rated}
      {/* Display movie details */}
    </div>
  );
};

export default MovieDetailsPage;
