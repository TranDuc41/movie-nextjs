import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import ReactPlayer from 'react-player';

function Trailer({ movieId }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState('');

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchTrailerUrl = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=d5252712b903a754298b9ed7ce489c43`
        );
        const data = await response.json();
        const trailer = data.results.find(result => result.type === 'Trailer');
        if (trailer) {
          setTrailerUrl(`https://www.youtube.com/watch?v=${trailer.key}`);
        }
      } catch (error) {
        console.error('Error fetching trailer URL:', error);
      }
    };

    if (movieId) {
      fetchTrailerUrl();
    }
  }, [movieId]);

  return (
    <>
      <button className="watch-btn" onClick={openModal}>
        <span>Play Trailer <i className="fa fa-play" /></span>
      </button>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Trailer Modal"
        style={{
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.75)',
            },
            content: {
              width: '40%',
              height: '52%',
              margin: 'auto',
              borderRadius: '8px',
              border: 'none',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding:'0',
              background:'none'
            },
          }}
      >
        {/* React Player to display the video */}
        <ReactPlayer url={trailerUrl} controls />
      </Modal>
    </>
  );
}

export default Trailer;
