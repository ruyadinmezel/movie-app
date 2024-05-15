import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Pagination,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { Router, useRoutes } from "react-router-dom";
import { Link } from "react-router-dom";

const MovieCard = (props) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const handleMovieClick = (imdbID) => {
    console.log("Clicked IMDb ID:", imdbID);
  };
  return (
    <div>
      <Grid
        container
        spacing={3}
        margin={isSmallScreen ? 1 : 3}
        ml={isSmallScreen ? 1 : 5}
        sx={{ maxWidth: "100%" }}
      >
        {props.movies.map((movie, index) => (
          <Grid
            item
            key={movie.imdbID}
            xs={10}
            sm={5}
            md={3.5}
            lg={2.2}
            xl={2.2}
          >
            <Link
              to={`/MovieDetails/${movie.imdbID}`} // Pass IMDb ID as URL parameter
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {movie.Poster !== "N/A" ? (
                  <CardMedia
                    component="img"
                    image={movie.Poster}
                    alt={movie.Title}
                    sx={{ height: isSmallScreen ? "200px" : "65%" }}
                  />
                ) : (
                  <Box sx={{ height: isSmallScreen ? "200px" : "65%" }}></Box>
                )}
                <CardContent sx={{ flex: 1, m: 1 }}>
                  {/* //sx={{ fontFamily: "roboto" }} */}
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: isSmallScreen ? 14 : 16,
                    }}
                  >
                    {movie.Title}
                  </Typography>
                  <Typography
                    sx={{
                      fontStyle: "italic",
                      fontSize: isSmallScreen ? 12 : 14,
                    }}
                  >
                    {movie.Year}
                  </Typography>
                  <Box flexGrow={5}></Box>
                  <Typography sx={{ fontSize: isSmallScreen ? 10 : 12 }}>
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
