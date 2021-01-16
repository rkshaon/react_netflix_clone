// component
import React, { useState, useEffect } from 'react';
import instance from './axios';

function Row({ title, fetchURL }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // this is going to be run only once, if I add depency array, then it will change everytime the value effects
    async function fetchData() {
      const request = await instance.get(fetchURL); // the url https://api.themoviedb.org/3 + fetchURL
      console.log(request.data.results);
    }
    fetchData();
  }, []);

  return(
    <div>
      <h2>{title}</h2>
      {/* container -> posters */}
    </div>
  )
}

export default Row;
