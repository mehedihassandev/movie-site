import { Link } from "react-router-dom";
import "../App.css";

interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({
  movie: { imdbID, Year, Poster, Title, Type },
}) => {
  return (
    <>
      <Link to={`/details/${imdbID}`}>
        <div className="movie" key={imdbID}>
          <div>
            <p>{Year}</p>
          </div>
          <div>
            <img
              src={
                Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"
              }
              alt={Title}
            />
          </div>

          <div>
            <span>{Type}</span>
            <h3>{Title}</h3>
          </div>
        </div>
      </Link>
    </>
  );
};

export default MovieCard;
