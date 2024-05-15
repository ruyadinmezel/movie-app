import {
  AppBar,
  Box,
  CardMedia,
  Toolbar,
  Typography,
  Card,
  Grid,
  Divider,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { deepPurple, grey } from "@mui/material/colors";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import starIcon from "./star-icon.svg";
import peopleIcon from "./people.svg";
import popcornIcon from "./popcorn.svg";

const MovieDetailsPage = () => {
  const { imdbID } = useParams();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [movieDetails, setMovieDetails] = useState([]);

  useEffect(() => {
    getMovieDetails();
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
      <Box>
        <AppBar position="static" style={{ background: deepPurple[600] }}>
          <Toolbar sx={{ mt: 2 }}>
            <Link to={`/`} style={{ textDecoration: "none", color: "inherit" }}>
              <ArrowBackIcon></ArrowBackIcon>
            </Link>

            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, width: "15%" }}
            >
              MovieHub
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Grid container spacing={isSmallScreen ? 2 : 4}>
        <Grid item xs={12} sm={12} md={6} lg={5} xl={4.5}>
          <Card raised={true} sx={{ m: isSmallScreen ? 2 : 5 }}>
            {movieDetails.Poster !== "N/A" ? (
              <CardMedia
                component="img"
                image={movieDetails.Poster}
                alt={movieDetails.Title}
              />
            ) : (
              <Box></Box>
            )}
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={7} xl={7}>
          <Typography
            sx={{
              fontFamily: "Monospace",
              fontWeight: "bold",
              fontSize: isSmallScreen ? 30 : 40,
              ml: isSmallScreen ? 2 : 5,
              mt: isSmallScreen ? 2 : 5,
            }}
          >
            {movieDetails.Title}
          </Typography>
          <Grid container sx={{ ml: isSmallScreen ? 2 : 5 }}>
            <Typography
              sx={{
                fontFamily: "Monospace",
                fontSize: isSmallScreen ? 16 : 20,
                color: grey[600],
              }}
            >
              {movieDetails.Year} |
            </Typography>

            <Typography
              sx={{
                fontFamily: "Monospace",
                fontSize: isSmallScreen ? 16 : 20,
                color: grey[600],
              }}
            >
              {movieDetails.Runtime} |
            </Typography>

            <Typography
              sx={{
                fontFamily: "Monospace",
                fontSize: isSmallScreen ? 16 : 20,
                color: grey[600],
              }}
            >
              {" "}
              {movieDetails.Genre}
            </Typography>
          </Grid>

          <Typography
            sx={{
              fontFamily: "Monospace",
              fontSize: isSmallScreen ? 16 : 20,
              ml: isSmallScreen ? 2 : 5,
              mt: isSmallScreen ? 2 : 5,
              mb: isSmallScreen ? 2 : 5,
            }}
          >
            {movieDetails.Plot}
          </Typography>

          <Grid container sx={{ ml: isSmallScreen ? 2 : 5 }}>
            <Typography
              sx={{
                fontFamily: "Monospace",
                fontSize: isSmallScreen ? 16 : 20,
                mr: 4,
                color: grey[600],
              }}
            >
              Starring{" "}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Monospace",
                fontSize: isSmallScreen ? 16 : 20,
              }}
            >
              {movieDetails.Actors}
            </Typography>
          </Grid>

          <Grid container sx={{ ml: isSmallScreen ? 2 : 5 }}>
            <Typography
              sx={{
                fontFamily: "Monospace",
                fontSize: isSmallScreen ? 16 : 20,
                mr: 4,
                color: grey[600],
              }}
            >
              Directors{" "}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Monospace",
                fontSize: isSmallScreen ? 16 : 20,
              }}
            >
              {movieDetails.Director}
            </Typography>
          </Grid>

          <Grid container sx={{ ml: isSmallScreen ? 2 : 5 }}>
            <Typography
              sx={{
                fontFamily: "Monospace",
                fontSize: isSmallScreen ? 16 : 20,
                mr: 4,
                color: grey[600],
              }}
            >
              Writers
            </Typography>
            <Typography
              sx={{
                fontFamily: "Monospace",
                fontSize: isSmallScreen ? 16 : 20,
              }}
            >
              {movieDetails.Writer}
            </Typography>
          </Grid>

          <Grid container sx={{ ml: isSmallScreen ? 2 : 5 }}>
            <Typography
              sx={{
                fontFamily: "Monospace",
                fontSize: isSmallScreen ? 16 : 20,
                mr: 4,
                color: grey[600],
              }}
            >
              Language
            </Typography>
            <Typography
              sx={{
                fontFamily: "Monospace",
                fontSize: isSmallScreen ? 16 : 20,
              }}
            >
              {movieDetails.Language}
            </Typography>
          </Grid>

          <Divider sx={{ my: isSmallScreen ? 3 : 7 }}></Divider>

          <Stack
            direction={isSmallScreen ? "column" : "row"}
            spacing={isSmallScreen ? 2 : 5}
            ml={isSmallScreen ? 5 : 10}
          >
            <Grid container>
              <Box sx={{ height: 30, width: 30, mr: 2, mt: 2 }}>
                <img src={starIcon}></img>
              </Box>
              <Grid item>
                <Typography
                  sx={{
                    fontFamily: "Monospace",
                    fontSize: isSmallScreen ? 16 : 20,
                    mr: 5,
                  }}
                >
                  {movieDetails.imdbRating}/10
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Monospace",
                    fontSize: isSmallScreen ? 14 : 15,
                    color: grey[600],
                  }}
                >
                  IMDb Rating
                </Typography>
              </Grid>
            </Grid>

            <Grid container>
              <Box sx={{ height: 30, width: 30, mr: 2, mt: 2 }}>
                <img src={popcornIcon} height={30}></img>
              </Box>
              <Grid item>
                <Typography
                  sx={{
                    fontFamily: "Monospace",
                    fontSize: isSmallScreen ? 16 : 20,
                    mr: 5,
                  }}
                >
                  {movieDetails.imdbVotes}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Monospace",
                    fontSize: isSmallScreen ? 14 : 15,
                    color: grey[600],
                  }}
                >
                  IMDb Votes
                </Typography>
              </Grid>
            </Grid>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
};

export default MovieDetailsPage;
