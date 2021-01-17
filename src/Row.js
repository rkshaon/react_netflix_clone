// component
import React, { useState, useEffect } from 'react';
import instance from './axios';
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchURL, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // this is going to be run only once, if I add depency array, then it will change everytime the value effects
    async function fetchData() {
      const request = await instance.get(fetchURL); // the url https://api.themoviedb.org/3 + fetchURL
      // console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);

  console.log(movies);

  return(
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {/* row posters */}
        {movies.map((movie) => {
          return <img
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              key={movie.id}
              src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.name}
            />
        })}
      </div>
    </div>
  )
}

export default Row;
