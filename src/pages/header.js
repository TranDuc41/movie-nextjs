import { Inter } from 'next/font/google'
import Link from "next/link";
import GenreList from './category';
import { useState } from 'react';
import { useRouter } from 'next/router';

// Hiển thị input search
function YourComponent() {
  const router = useRouter();
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Chuyển hướng đến trang "search.js" với từ khóa tìm kiếm
    router.push(`/search?keyword=${searchKeyword}`);
  };

  const handleSearchSwitch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <div className="col-lg-2 align-self-center">
      <div className="header__right">
        <a href="#" className="search-switch" onClick={handleSearchSwitch}>
          <span className="icon_search" />
        </a>
        {isSearchVisible && (
          <div>
            <form onSubmit={handleSearchSubmit} style={{display: "flex"}}>
            <input type="text" placeholder="Search..." style={{padding: '1px 10px', borderRadius: '6px 0 0 6px'}} value={searchKeyword} onChange={(event) => setSearchKeyword(event.target.value)}/>
            <button type="submit" style={{ background: 'red', padding: '0 8px', borderRadius: '0 6px 6px 0', color: '#fff'}}>Search</button>
            </form>
            {/* Additional search-related content */}
          </div>
        )}
      </div>
    </div>
  );
}


export default function Header() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="description" content="Anime Template" />
      <meta name="keywords" content="Anime, unica, creative, html" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>Anime | Template</title>
      {/* Google Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      {/* Css Styles */}
      {/* <link rel="stylesheet" href="css/owl.carousel.min.css" type="text/css" /> */}

      {/* Page Preloder */}
      {/* <div id="preloder">
        <div className="loader" />
      </div> */}

      {/* Header Section Begin */}
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 align-self-center">
              <div className="header__logo">
                <Link href="/">
                  <img src="../img/logoTMDB.svg" alt="" style={{width: '172px'}}/>
                </Link>
              </div>
            </div>
            <div className="col-lg-8 align-self-center">
              <div className="header__nav">
                <nav className="header__menu mobile-menu">
                  <ul>
                    <li className="active">
                      <Link href="/">Homepage</Link>
                    </li>
                    <li>
                      <Link href="#">
                        Categories <span className="arrow_carrot-down" />
                      </Link>
                      <GenreList/>
                    </li>
                    <li>
                      <Link href="#">Our Blog</Link>
                    </li>
                    <li>
                      <Link href="#">Contacts</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-lg-2 align-self-center">
              <div className="header__right">
                <YourComponent/>
              </div>
            </div>
          </div>
          <div id="mobile-menu-wrap" />
        </div>
      </header>
      {/* Header End */}
    </>
  )
}
