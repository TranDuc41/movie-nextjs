import '@/styles/globals.css'
import '@/styles/style.css'
import '@/styles/bootstrap.min.css'
import '@/styles/font-awesome.min.css'
import '@/styles/elegant-icons.css'
import '@/styles/plyr.css'
import '@/styles/nice-select.css'
import '@/styles/slicknav.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Categories from './categories'
import Anime_Details from './anime_details/[movieId]'
import Home from '.'
import Anime_Watching from './anime_watching'
import {Helmet} from 'react-helmet';

export default function App({ Component, pageProps }) {
  return (
    <Component {...pageProps} >
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<Categories />} path='/categories' />
          <Route element={<Anime_Details />} path='/anime_details' />
          <Route element={<Anime_Watching />} path='/anime_watching' />
        </Routes>
      </BrowserRouter>

      <Helmet>
        <script src="./js/jquery-3.3.1.min.js"></script>
        <script src="./js/bootstrap.min.js"></script>
        <script src="./js/player.js"></script>
        <script src="./js/main.js"></script>
        <script src="./js/jquery.nice-select.min.js"></script>
        <script src="./js/mixitup.min.js"></script>
        <script src="./js/jquery.slicknav.js"></script>
        <script src="./js/owl.carousel.min.js"></script>
      </Helmet>
    </Component>
    
  )
}
