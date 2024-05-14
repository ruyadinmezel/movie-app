import { CenterFocusStrong } from "@mui/icons-material";
import { Card, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";

const MovieCard = (props) => {
  return (
    <div>
      <Grid container spacing={0.5} sx={{ ml: 2.5 }}>
        {props.movies.map((movie, index) => (
          <div>
            <Grid item xs>
              <Card
                sx={{
                  m: 2,
                  width: 320,
                  height: 600,
                }}
              >
                <CardMedia component="img" image={movie.Poster} alt="poster" />

                <Typography>{movie.Title}</Typography>
                <Typography>{movie.Year}</Typography>
                <Typography>ImdbID:{movie.imdbID}</Typography>
              </Card>
            </Grid>
          </div>
        ))}
      </Grid>
    </div>
  );
};

export default MovieCard;
