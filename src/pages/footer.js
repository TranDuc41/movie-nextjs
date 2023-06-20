import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })

export default function Footer() {
  return (
    <>
      {/* Footer Section Begin */}
      <footer className="footer">
        <div className="page-up">
          <a href="#" id="scrollToTopButton">
            <span className="arrow_carrot-up" />
          </a>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="footer__logo">
              <Link href="/">
                  <img src="../img/logoTMDB.svg" alt="" style={{width: '172px'}}/>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="footer__nav">
                <ul>
                  <li className="active">
                    <Link href="/">Homepage</Link>
                  </li>
                  <li>
                    <Link href="#">Categories</Link>
                  </li>
                  <li>
                    <Link href="#">Our Blog</Link>
                  </li>
                  <li>
                    <Link href="#">Contacts</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <p>
              Nguồn cung cấp API:{" "}
                <a href="https://www.themoviedb.org/?language=vi" target="_blank">
                  TMDB
            </a>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              </p>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer Section End */}
    </>
  )
}
