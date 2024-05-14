import { CenterFocusStrong } from "@mui/icons-material";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";

const MovieCard = (props) => {
  return (
    <div>
      <Grid container spacing={0.5} sx={{ ml: 1, mt: 2 }}>
        {props.movies.map((movie, index) => (
          <div>
            <Grid item xs>
              <Card
                sx={{
                  m: 1,
                  width: 340,
                  height: 620,
                }}
                alignItems="flex-start"
              >
                <CardMedia
                  component="img"
                  image={movie.Poster}
                  alt="poster"
                  sx={{
                    width: 340,
                    height: 500,
                  }}
                />
                <CardContent sx={{ justifyContent: "center" }}>
                  <Typography>{movie.Title}</Typography>
                  <Typography>{movie.Year}</Typography>
                  <Typography>ImdbID:{movie.imdbID}</Typography>
                </CardContent>
              </Card>
            </Grid>
          </div>
        ))}
      </Grid>
    </div>
  );
};

export default MovieCard;
