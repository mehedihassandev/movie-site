import { Box, Grid } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const MovieDetails = () => {
  interface Item {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
    Actors: string;
    Awards: string;
    BoxOffice: string;
    Country: string;
    Director: string;
    Genre: string;
    Language: string;
    Metascore: string;
    Plot: string;
    Released: string;
    Writer: string;
    Runtime: string;
  }
  const { id } = useParams();

  const [item, setItem] = useState<Item | null>(null);

  const movieDetails = async (title: any) => {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?i=${id}&apikey=43e450bf`
      );
      setItem(response.data);
      console.log(response.data);
    } catch (error: any) {}
  };

  useEffect(() => {
    movieDetails(id);
  }, []);
  return (
    <>
      <Box
        sx={{
          margin: "30px",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Box
              sx={{
                width: "100%",
                padding: "30px",
                "& img": {
                  width: "100%",
                },
              }}
            >
              <img src={item?.Poster} alt={item?.Title} />
            </Box>
          </Grid>

          <Grid item xs={8}>
            <Box sx={{ padding: "30px" }}>
              <Box
                sx={{
                  width: "100%",

                  "& h2": {
                    fontSize: "30px",
                    fontWeight: "bold",
                    color: "white",
                    paddingBottom: "5px",
                  },

                  "& span": {
                    fontSize: "16px",
                    color: "#777777",
                  },
                }}
              >
                <h2>
                  {item?.Title} <span>({item?.Year})</span>
                </h2>
              </Box>

              <Box
                sx={{
                  paddingBottom: "10px",

                  "& p": {
                    fontSize: "14px",
                    color: "#555",
                  },

                  "& span": {
                    padding: "0px 20px",
                  },
                }}
              >
                <p>
                  Relese Date: {item?.Released}{" "}
                  <span>Box Office: {item?.BoxOffice}</span>
                </p>
              </Box>

              <Box
                sx={{
                  paddingBottom: "5px",
                  "& h2": {
                    fontSize: "16px",
                    color: "#999",
                  },
                  "& span": {
                    padding: "0px 20px",
                  },
                }}
              >
                <h2>
                  {item?.Genre} <span>{item?.Country}</span>{" "}
                  <span>{item?.Runtime}</span>
                </h2>
              </Box>

              <Box
                sx={{
                  paddingBottom: "20px",
                  "& p": {
                    fontSize: "14px",
                    color: "#999",
                  },
                }}
              >
                <p>{item?.Awards}</p>
              </Box>

              <Box
                sx={{
                  paddingBottom: "40px",

                  "& p": {
                    fontSize: "18px",
                    color: "#fff",
                  },
                }}
              >
                <p>{item?.Plot}</p>
              </Box>

              <Box>
                <h1>Cast</h1>
              </Box>

              <Box
                sx={{
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  "& h2": {
                    fontSize: "22px",
                    color: "#fff",
                    paddingBottom: "5px",
                  },

                  "& p": {
                    fontSize: "16px",
                    color: "#999",
                  },
                }}
              >
                <h2>Actors</h2>
                <p>{item?.Actors}</p>
              </Box>

              <Box
                sx={{
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  "& h2": {
                    fontSize: "22px",
                    color: "#fff",
                    paddingBottom: "5px",
                  },

                  "& p": {
                    fontSize: "16px",
                    color: "#999",
                  },
                }}
              >
                <h2>Director</h2>
                <p>{item?.Director}</p>
              </Box>

              <Box
                sx={{
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  "& h2": {
                    fontSize: "22px",
                    color: "#fff",
                    paddingBottom: "5px",
                  },

                  "& p": {
                    fontSize: "16px",
                    color: "#999",
                  },
                }}
              >
                <h2>Writer</h2>
                <p>{item?.Writer}</p>
              </Box>

              <Box
                sx={{
                  paddingTop: "50px",

                  "& a": {
                    textDecoration: "none",
                    padding: "10px 40px",
                    backgroundColor: "#000",
                    color: "white",
                    borderRadius: "5px",
                    transition: "all linear 0.3s",
                  },

                  "& a:hover": {
                    backgroundColor: "#101010",
                  },
                }}
              >
                <Link to="/"> Back</Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default MovieDetails;
