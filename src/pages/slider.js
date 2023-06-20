import React, { useEffect, useState } from 'react';
import { Carousel } from "react-responsive-carousel";
import Trailer from './trailer';
import Link from "next/link";

const TopRated = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=d5252712b903a754298b9ed7ce489c43&page=1');
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
        <section className="hero">
            <div className="container">

                <Carousel
                    showArrows={true}
                    autoPlay={true}
                    showStatus={false}
                    showThumbs={false}
                    infiniteLoop={true}
                >
                    {movies.slice(0, 6).map(movie => (
                        <div key={movie.id}>
                            <img src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${movie.backdrop_path}`} alt="Movie Poster" />
                            <div className="row txt">
                                <div className="col-lg-12" style={{ paddingLeft: '100px', textAlign: 'initial' }}>
                                    <div className="hero__text">
                                        <div className="label">Popular</div>
                                        <h2>{movie.original_title}</h2>
                                        <p>After 30 days of travel across the world...</p>
                                        <Trailer movieId={movie.id}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </section>
    );

};

export default TopRated;
