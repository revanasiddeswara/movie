import React from "react";
import PropTypes from "prop-types";
import Movie from "./movie";
import './movie.css'

const Movies = ({ movies }) => (
  <ul className="movies">
    {movies.map((movie) => (
      <li key={movie.imdbID}>
        <Movie Title={movie.Title} Poster={movie.Poster} />
      </li>
    ))}
  </ul>
);

Movies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      Title: PropTypes.string.isRequired,
      Poster: PropTypes.string.isRequired,
    })
  ),
};

export default Movies;
