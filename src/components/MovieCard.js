import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { Router, useRoutes } from "react-router-dom";
import { Link } from "react-router-dom";

const MovieCard = (props) => {
  const handleMovieClick = (imdbID) => {
    console.log("Clicked IMDb ID:", imdbID);
  };
  return (
    <div>
      <Grid container spacing={3} margin={3} ml={10}>
        {props.movies.map((movie, index) => (
          <Grid item key={movie.imdbID} sx={{ width: "17%" }}>
            <Link
              to={`/MovieDetails/${movie.imdbID}`} // Pass IMDb ID as URL parameter
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Card sx={{ height: 530 }}>
                <CardMedia
                  component="img"
                  image={movie.Poster}
                  alt="poster"
                  sx={{ height: "65%" }}
                />
                <CardContent sx={{ height: "35%", m: 1 }}>
                  {/* //sx={{ fontFamily: "roboto" }} */}
                  <Typography sx={{ fontWeight: "bold", fontSize: 16 }}>
                    {movie.Title}
                  </Typography>
                  <Typography sx={{ fontStyle: "italic", fontSize: 16 }}>
                    {movie.Year}
                  </Typography>
                  <Box flexGrow={5}></Box>
                  <Typography sx={{ fontSize: 14 }}>
                    Imdb ID: {movie.imdbID}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default MovieCard;
