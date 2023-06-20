import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Header from './header'
import Footer from './footer'
import Link from "next/link";

function SearchPage() {
    const router = useRouter();
    const { keyword } = router.query;
    const [searchResults, setSearchResults] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        if (keyword) {
            // Gọi API hoặc xử lý tìm kiếm với từ khóa
            // và cập nhật kết quả tìm kiếm
            fetchSearchResults(keyword);
        }
    }, [keyword, page]);

    async function fetchSearchResults(keyword) {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/search/movie?api_key=d5252712b903a754298b9ed7ce489c43&query=${keyword}&page=${page}`
            );
            const data = await response.json();
            setSearchResults(data.results);
        } catch (error) {
            console.error('Error searching movies:', error);
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
                    <Link href={`/search?keyword=${keyword}&page=${page - 1}`} passHref>
                        <button onClick={handlePreviousPage}>
                            <i className="fa fa-arrow-left" /> {page - 1} Page
                        </button>
                    </Link>
                )}

                <Link href={`/search?keyword=${keyword}&page=${page + 1}`} passHref>
                    <button onClick={handleNextPage}>Page {page + 1} <i className="fa fa-arrow-right"></i></button>
                </Link>
            </>
        );
    };

    // Hiển thị kết quả tìm kiếm
    return (
        // <div>
        //   {searchResults.map((movie) => (
        //     <div key={movie.id}>{movie.title}</div>
        //   ))}
        // </div>
        <>
            <Header />

            <section className="product-page spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="product__page__content">
                                <div className="product__page__title">
                                    <div className="row">
                                        <div className="col-lg-8 col-md-8 col-sm-6">
                                            <div className="section-title">
                                                <h4>Kết Quả cho từ khóa "{keyword}"</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    {searchResults.map(movie => (
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
                                                            <i className="fa fa-calendar" /> {movie.release_date}
                                                        </div>
                                                    </div>
                                                </Link>
                                                <div className="product__item__text">
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

            <Footer />
        </>
    );
}

export default SearchPage;
