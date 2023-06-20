import React, { useEffect, useState } from 'react';
import Link from "next/link";

const Mystery = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=d5252712b903a754298b9ed7ce489c43&with_genres=9648');
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
        <div className="filter__gallery">
            {movies.slice(0, 6).map(movie => (
                <Link href={`/anime_details/${movie.id}`} key={movie.id}>
                    <div
                        className="product__sidebar__view__item set-bg mix day years"
                        style={{ background: `url("https://image.tmdb.org/t/p/w500${movie.backdrop_path}")` }}
                        key={movie.id}
                    >
                        <div className="ep">18 / ?</div>
                        <div className="view">
                            <i className="fa fa-eye" /> 9141
                        </div>
                        <h5>
                            <Link href={`/anime_details/${movie.id}`}>
                                {movie.original_title}
                            </Link>
                        </h5>
                    </div>
                </Link>
            ))}
        </div>
    );

};

export default Mystery;
