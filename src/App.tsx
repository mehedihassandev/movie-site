import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MovieDetails from "./pages/MovieDetails";
import MovieList from "./pages/MovieList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/details/:id" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
