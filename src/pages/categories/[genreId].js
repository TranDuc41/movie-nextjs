import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from "next/link";
import Header from '../header'
import Footer from '../footer'

function CategoryPage() {
    const router = useRouter();
    const { genreId } = router.query;
    const [movies, setMovies] = useState([]);
    const [categorys, setCategorys] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        if (genreId) {
            fetchMoviesByGenre(genreId);
            fetchListCategory();
        }
    }, [genreId, page]);

    async function fetchMoviesByGenre(genreId) {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/discover/movie?api_key=d5252712b903a754298b9ed7ce489c43&with_genres=${genreId}&page=${page}`
            );
            const data = await response.json();
            setMovies(data.results);
        } catch (error) {
            console.error('Error fetching movies by genre:', error);
        }
    }
    async function fetchListCategory() {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/genre/movie/list?api_key=d5252712b903a754298b9ed7ce489c43`
            );
            const genres = await response.json();
            setCategorys(genres.genres);

        } catch (error) {
            console.error('Error fetching movies by genre:', error);
        }
    }

    const YourComponent = () => {

        const handleNextPage = () => {
            setPage(page + 1);
        };

        const handlePreviousPage = () => {
            if (page > 1) {
                setPage(page - 1);
            }
        };

        return (
            <>
            {page > 1 && (
                    <Link href={`/categories/${genreId}?page=${page > 1 ? page - 1 : page}`} passHref>
                        <button onClick={handlePreviousPage}>
                            <i className="fa fa-arrow-left" /> {page - 1} Page
                        </button>
                    </Link>
                )}

                <Link href={`/categories/${genreId}?page=${page + 1}`} passHref>
                    <button onClick={handleNextPage}>Page {page + 1} <i className="fa fa-arrow-right"></i></button>
                </Link>
            </>
        );
    };


    // Tìm đối tượng thể loại có id trùng khớp với genreId
    const selectedGenre = categorys.find(genre => genre.id === parseInt(genreId));
    if (!selectedGenre) {
        return <div>Category not found</div>;
    }
    // Lấy tên category từ selectedGenre
    const categoryName = selectedGenre.name;

    return (
        <>
            <Header />

            {/* Product Section Begin */}
            <section className="product-page spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="product__page__content">
                                <div className="product__page__title">
                                    <div className="row">
                                        <div className="col-lg-8 col-md-8 col-sm-6">
                                            <div className="section-title">
                                                <h4>{categoryName}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    {movies.map(movie => (
                                        <div className="col-lg-3 col-md-6 col-sm-6" key={movie.id}>
                                            <div className="product__item">
                                                <Link href={`/anime_details/${movie.id}`}>
                                                    <div
                                                        className="product__item__pic set-bg"
                                                        style={{ background: `url("https://image.tmdb.org/t/p/w500${movie.poster_path}")` }}
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
                                                    <h5>
                                                        <Link href={`/anime_details/${movie.id}`}>
                                                            {movie.original_title}
                                                        </Link>
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="product__pagination">
                                <YourComponent />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Product Section End */}

            <Footer />
        </>
    );
}

export default CategoryPage;
