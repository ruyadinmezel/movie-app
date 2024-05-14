import { CenterFocusStrong } from "@mui/icons-material";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
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
                  height: 550,
                }}
                alignItems="flex-start"
              >
                <CardMedia
                  component="img"
                  image={movie.Poster}
                  alt="poster"
                  sx={{
                    width: 320,
                    height: 400,
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
