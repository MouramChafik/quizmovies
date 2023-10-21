import React, { useEffect, useState } from "react";

const apiKey = "8a6783e6b16c1b77912e3674300721a8";

function Movies() {
  const [moviesList, setMoviesList] = useState([]);

  const getMovie = () => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=28`
    )
      .then((res) => res.json())
      .then((json) => setMoviesList(json.results));
  };

  useEffect(() => {
    getMovie();
  }, []);

  console.log(moviesList);

  return (
    <div className="container">
      {moviesList.map((movie) => (
        <div key={movie.id} className="container-movie">
          <img
            className="movie-img"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
          <h1 className="title-movie">{movie.title}</h1>
          <h5 className="date-movie">Date: {movie.release_date}</h5>
          <h6 className="rating-movie">{movie.vote_average}</h6>
        </div>
      ))}
    </div>
  );
}

export default Movies;
