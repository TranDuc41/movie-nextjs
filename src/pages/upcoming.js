import React, { useEffect, useState } from 'react';
import Link from "next/link";

const Upcoming = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=d5252712b903a754298b9ed7ce489c43&page=1');
        const jsonData = await response.json();
        const movies = jsonData.results;

        setMovies(movies);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  if (!Array.isArray(movies)) {
    return <div>Error: Invalid data</div>;
  }

  return (
    <div className="row">
      {movies.slice(0, 6).map(movie => (

        <div className="col-lg-4 col-md-6 col-sm-6" key={movie.id}>
          <div className="product__item">
          <Link href={`/anime_details/${movie.id}`}>
            <div
              className="product__item__pic set-bg"
              style={{
                background: `url("https://image.tmdb.org/t/p/w500${movie.poster_path}")`,
              }}
            >
              <div className="ep">18 / 18</div>
              <div className="comment">
                <i className="fa fa-comments" /> 11
              </div>
              <div className="view">
                <i className="fa fa-eye" /> 9141
              </div>
            </div>
            </Link>
            <div className="product__item__text">
              <ul>
                <li>Active</li>
                <li>Movie</li>
              </ul>
              <h5 className="text_center">
                <Link href={`/anime_details/${movie.id}`}>
                  {movie.original_title}
                </Link>
              </h5>
            </div>
          </div>
        </div>

      ))}
    </div>
  );
};

export default Upcoming;
