import {
  AppBar,
  Box,
  Button,
  Card,
  MenuItem,
  Select,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { deepPurple, indigo } from "@mui/material/colors";
import MovieIcon from "@mui/icons-material/Movie";
import SearchIcon from "@mui/icons-material/Search";
import MovieCard from "./components/MovieCard";

function App() {
  const [type, setType] = useState("All");
  const [year, setYear] = useState("All");
  const [searchText, setSearchText] = useState("Pokemon");
  const [searchTextChange, setSearchTextChange] = useState("Pokemon");
  const [movies, setMovies] = useState([]);
  const years = [];
  for (let year = 2024; year >= 1920; year--) {
    years.push(year);
  }

  const getMovies = async (searchText, typ, year) => {
    var urltext = searchText;
    if (type !== "All") {
      urltext = urltext + "&type=" + type;
    }
    if (year !== "All") {
      urltext = urltext + "&y=" + year;
    }

    const url = `https://www.omdbapi.com/?s=${urltext}&apikey=7338b124`;
    const response = await fetch(url);

    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
    console.log(responseJson);
  };

  useEffect(() => {
    getMovies(searchText, type, year);
  }, [searchText, type, year]);

  const handleChangeYear = (event) => {
    setYear(event.target.value);
    console.log(event.target.value);
  };

  const handleChangeType = (event) => {
    setType(event.target.value);
    console.log(event.target.value);
  };
  const handleChangeSearchText = (event) => {
    setSearchTextChange(event.target.value);
    console.log(event.target.value);
  };
  const handleSearchButton = (event) => {
    setSearchText(searchTextChange);

    console.log(event.target.value);
    getMovies(searchText, type);
  };

  return (
    <div className="App">
      <Box>
        <AppBar position="static" style={{ background: deepPurple[600] }}>
          <Toolbar sx={{ mt: 2 }}>
            <MovieIcon sx={{ mr: 2, width: "2%" }}></MovieIcon>

            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, width: "15%" }}
            >
              MovieHub
            </Typography>

            <Select
              variant="standard"
              sx={{ mb: 0, mr: 1, width: "7%" }}
              value={year}
              label={year}
              onChange={handleChangeYear}
            >
              <MenuItem value={"All"}>All Years</MenuItem>
              {years.map((year) => (
                <MenuItem value={year}>{year}</MenuItem>
              ))}
            </Select>

            <Select
              variant="standard"
              sx={{ mb: 0, mr: 1, width: "9%" }}
              value={type}
              label={type}
              onChange={handleChangeType}
            >
              <MenuItem value={"All"}>All Types</MenuItem>
              <MenuItem value={"movie"}>Movies</MenuItem>
              <MenuItem value={"series"}>TV Series</MenuItem>
              <MenuItem value={"episode"}>TV Series Episodes</MenuItem>
            </Select>

            <TextField
              label="Search"
              variant="standard"
              value={searchTextChange}
              sx={{ ml: 1, mb: 2, width: "12%" }}
              onChange={handleChangeSearchText}
            />
            <Button sx={{ m: 1, width: "2%" }} onClick={handleSearchButton}>
              <SearchIcon sx={{ color: "white" }} />
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <MovieCard movies={movies}></MovieCard>
    </div>
  );
}

export default App;
