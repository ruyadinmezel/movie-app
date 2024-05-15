import {
  AppBar,
  Box,
  CardMedia,
  Toolbar,
  Typography,
  Card,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { deepPurple } from "@mui/material/colors";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

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
      <Card raised="true" sx={{ width: "32%", m: 5 }}>
        <CardMedia
          component="img"
          image={movieDetails.Poster}
          alt="poster"
          sx={{ height: "75%" }}
        />
      </Card>
    </div>
  );
};

export default MovieDetailsPage;
