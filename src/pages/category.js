import { useEffect, useState } from 'react';
import Link from 'next/link';

function GenreList() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetchGenres();
  }, []);

  async function fetchGenres() {
    try {
      const response = await fetch(
        'https://api.themoviedb.org/3/genre/movie/list?api_key=d5252712b903a754298b9ed7ce489c43'
      );
      const data = await response.json();
      setGenres(data.genres);
    } catch (error) {
      console.error('Error fetching genres:', error);
    }
  }

  return (
    <ul className="dropdown">
      {genres.slice(6, 12).map(genre => (
        <li key={genre.id}>
          <Link href={`/categories/${genre.id}`}>{genre.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default GenreList;
