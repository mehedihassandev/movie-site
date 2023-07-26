import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import "../App.css";
import Layout from "../components/Layout/Layout";
import MovieCard from "./MovieCard";

const API_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=43e450bf";

const MovieList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title: any) => {
    try {
      const response = await axios.get(`${API_URL}&s=${title}`);
      setMovies(response.data.Search);
    } catch (error: any) {}
  };

  useEffect(() => {
    searchMovies("all");
  }, []);

  return (
    <>
      <Layout>
        <div className="app">
          <div className="search">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for movies"
            />

            <IconButton
              onClick={() => searchMovies(searchTerm)}
              sx={{ color: "white" }}
            >
              <SearchIcon />
            </IconButton>
          </div>

          {movies?.length > 0 ? (
            <div className="container">
              {movies.map((movie) => (
                <MovieCard movie={movie} />
              ))}
            </div>
          ) : (
            <div className="empty">
              <h2>No movies found</h2>
            </div>
          )}
        </div>
      </Layout>
    </>
  );
};

export default MovieList;
