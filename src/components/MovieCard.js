import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

const MovieCard = (props) => {
  return (
    <div>
      <Grid container spacing={3} margin={5} ml={10}>
        {props.movies.map((movie, index) => (
          <Grid item sx={{ width: "17%" }}>
            <Card sx={{ height: 530 }}>
              <CardMedia
                component="img"
                image={movie.Poster}
                alt="poster"
                sx={{ height: "75%" }}
              />
              <CardContent sx={{ height: "25%", m: 1 }}>
                {/* //sx={{ fontFamily: "roboto" }} */}
                <Typography sx={{ fontWeight: "bold" }}>
                  {movie.Title}
                </Typography>
                <Typography sx={{ fontStyle: "italic" }}>
                  {movie.Year}
                </Typography>
                <Typography sx={{ fontStyle: "italic" }}>
                  Imdb ID: {movie.imdbID}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default MovieCard;
