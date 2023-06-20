import { useEffect, useState } from 'react';
import TopRated from './top-rated';

function MovieReviews({ movieId }) {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=d5252712b903a754298b9ed7ce489c43`
                );
                const data = await response.json();
                setReviews(data.results);
            } catch (error) {
                console.error('Error fetching movie reviews:', error);
            }
        };

        fetchReviews();
    }, [movieId]);

    return (<>
        {reviews?.length > 0 ? (
            reviews?.slice(0, 6).map((review) => (
                <div className="anime__review__item">

                    <div className="anime__review__item__pic">
                        <img src={`https://image.tmdb.org/t/p/w500${review.author_details.avatar_path}`} alt="" />
                    </div>
                    <div className="anime__review__item__text">
                        <h6>
                            {review.author_details.username} - <span>{review.author_details.rating} <i className="fa fa-star" /></span>
                        </h6>
                        <p>
                            {review.content}
                        </p>
                    </div>
                </div>
            ))
        ) : (
            <>
                <p className='text-warning' style={{paddingBottom: '86px'}}>No reviews available.</p>
                <div className="section-title">
                    <h5>Top Rated</h5>
                </div>
                <TopRated />
            </>
        )}
    </>
    );
}

export default MovieReviews;
