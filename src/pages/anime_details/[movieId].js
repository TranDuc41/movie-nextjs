import Header from '../header'
import Footer from '../footer'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Trailer from '../trailer';
import Reviews from '../reviews';
import Science from '../science';



export default function Anime_Details() {
  const router = useRouter();
  const { movieId } = router.query;
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=d5252712b903a754298b9ed7ce489c43`
        );
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error('Error fetching movie detail:', error);
      }
    };

    if (movieId) {
      fetchMovieDetail();
    }
  }, [movieId]);

  // Tính số sao
  const ratingPercentage = (movie.vote_average / 10) * 100;
  const ratingStars = (ratingPercentage / 100) * 5;


  if (!movie) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Header />

      {/* Breadcrumb Begin */}
      {/* <div className="breadcrumb-option">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__links">
                <a href="/">
                  <i className="fa fa-home" /> Home
                  </a>
                <a href="/categories">Categories</a>
                <span>Romance</span>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* Breadcrumb End */}
      {/* Anime Section Begin */}
      <section className="anime-details spad">
        <div className="container">
          <div className="anime__details__content" style={{ background: `url("https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${movie.backdrop_path}")`}}>
            <div className="row">
              <div className="col-lg-3">
                <div
                  className="anime__details__pic set-bg"
                  style={{ background: `url("https://image.tmdb.org/t/p/w500${movie.poster_path}")` }}
                >
                  <div className="comment">
                    <i className="fa fa-comments" /> 11
                  </div>
                  <div className="view">
                    <i className="fa fa-eye" /> 9141
                  </div>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="anime__details__text">
                  <div className="anime__details__title">
                    <h3>{movie.original_title}</h3>
                    {movie.production_countries?.map((country) => (
                    <span key={country.iso_3166_1}>{country.name}</span>
                    ))}
                  </div>
                  <div className="anime__details__rating">
                    <div className="rating">
                      <div className="rating">
                        {ratingStars >= 1 ? <i className="fa fa-star" /> : <i className="fa fa-star-o" />}
                        {ratingStars >= 2 ? <i className="fa fa-star" /> : <i className="fa fa-star-o" />}
                        {ratingStars >= 3 ? <i className="fa fa-star" /> : <i className="fa fa-star-o" />}
                        {ratingStars >= 4 ? <i className="fa fa-star" /> : <i className="fa fa-star-o" />}
                        {ratingStars >= 5 ? <i className="fa fa-star" /> : <i className="fa fa-star-o" />}
                      </div>
                    </div>
                    <span>{movie.vote_average} / {movie.vote_count}</span>
                  </div>
                  <p>
                    {movie.overview}
                  </p>
                  <div className="anime__details__widget">
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <ul>
                          <li>
                            <span>Watch time:</span> {movie.runtime} MIN
                          </li>
                          <li>
                            <span>Date aired:</span> {movie.release_date}
                          </li>
                          <li>
                            <span>Popularity:</span> {movie.popularity}
                          </li>
                          <li>
                          {/* Chuyển đổi mảng genres thành một chuỗi, nối các phần tử bằng dấu phẩy và khoảng trắng. Điều này sẽ loại bỏ dấu phẩy ở phần tử cuối cùng. */}
                          <span>Genres:</span> {movie.genres?.map((genre) => genre.name).join(', ')}
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <ul>
                          <li>
                            <span>Language:</span> {movie.spoken_languages?.map((language) => language.name).join(', ')}
                          </li>
                          <li>
                            <span>Status:</span> {movie.status}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="anime__details__btn">
                    <a href={movie.homepage} target="_blank" className="follow-btn">
                      <i className="fa fa-link" /> Website
                    </a>
                    {/* <Link href="" className="watch-btn">
                      <span>Trailer <i className="fa fa-play" /></span>
                    </Link> */}
                    <Trailer movieId={movie.id}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-md-8">
              <div className="anime__details__review">
                <div className="section-title">
                  <h5>Reviews</h5>
                </div>
                <Reviews movieId={movie.id}/>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="anime__details__sidebar">
                <div className="section-title">
                  <h5>you might like...</h5>
                </div>
                <Science/>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Anime Section End */}


      <Footer />
    </>

  )
}
