import {
  AppBar,
  Box,
  Button,
  Card,
  MenuItem,
  Pagination,
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
import MovieDetailsPage from "./components/MovieDetailsPage";

function Home() {
  const [type, setType] = useState("All");
  const [year, setYear] = useState("All");
  const [searchText, setSearchText] = useState("Pokemon");
  const [searchTextChange, setSearchTextChange] = useState("Pokemon");
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const years = [];
  for (let year = 2024; year >= 1920; year--) {
    years.push(year);
  }

  const getMovies = async (searchText, type, year, currentPage) => {
    var urltext = searchText;
    if (type !== "All") {
      urltext = urltext + "&type=" + type;
    }
    if (year !== "All") {
      urltext = urltext + "&y=" + year;
    }

    const url = `https://www.omdbapi.com/?s=${urltext}&page=${currentPage}&apikey=7338b124`;
    const response = await fetch(url);

    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
    //console.log(responseJson);
  };

  useEffect(() => {
    getMovies(searchText, type, year, currentPage);
  }, [searchText, type, year, currentPage]);

  const handleChangeYear = (event) => {
    setYear(event.target.value);
    // console.log(event.target.value);
  };

  const handleChangeType = (event) => {
    setType(event.target.value);
    //console.log(event.target.value);
  };
  const handleChangeSearchText = (event) => {
    setSearchTextChange(event.target.value);
    // console.log(event.target.value);
  };
  const handleSearchButton = (event) => {
    setSearchText(searchTextChange);

    //.log(event.target.value);
    getMovies(searchText, type);
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
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
              sx={{ flexGrow: 1, minWidth: "100px" }}
            >
              MovieHub
            </Typography>

            <Select
              variant="standard"
              sx={{ mb: 0, mr: 1, minWidth: "80px" }}
              value={year}
              label={year}
              onChange={handleChangeYear}
            >
              <MenuItem key="All" value={"All"}>
                All Years
              </MenuItem>
              {years.map((year) => (
                <MenuItem key={year} value={year}>
                  {year}
                </MenuItem>
              ))}
            </Select>

            <Select
              variant="standard"
              sx={{ mb: 0, mr: 1, minWidth: "150px" }}
              value={type}
              label={type}
              onChange={handleChangeType}
            >
              <MenuItem key="All" value={"All"}>
                All Types
              </MenuItem>
              <MenuItem key="movie" value={"movie"}>
                Movies
              </MenuItem>
              <MenuItem key="series" value={"series"}>
                TV Series
              </MenuItem>
              <MenuItem key="episode" value={"episode"}>
                TV Series Episodes
              </MenuItem>
            </Select>

            <TextField
              label="Search"
              variant="standard"
              value={searchTextChange}
              sx={{ ml: 1, mb: 2, minWidth: "150px" }}
              onChange={handleChangeSearchText}
            />
            <Button sx={{ m: 1, width: "2%" }} onClick={handleSearchButton}>
              <SearchIcon sx={{ color: "white" }} />
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <MovieCard
        sx={{ mt: 2, mx: "auto", maxWidth: "800px" }}
        movies={movies}
      ></MovieCard>
      <Box
        sx={{ mb: 5, mr: 8 }}
        style={{
          display: "flex",
          justifyContent: "center", // Center horizontally
          alignItems: "flex-end",
          textAlign: "center", // Center vertically
        }}
      >
        <Pagination
          count={100}
          page={currentPage}
          onChange={handlePageChange}
        />
      </Box>
    </div>
  );
}

export default Home;
