import React, { Component } from "react";
import { Inter } from "next/font/google";
import Header from "./header";
import Footer from "./footer";
import Link from "next/link";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import TopRated from './top-rated';
import Popular from './popular';
import Upcoming from './upcoming';
import Slider from './slider';
import Mystery from './mystery';
import Science from './science';


export default function Home() {
  return (
    <>
      <Header />
      <Slider/>
      
      {/* Product Section Begin */}
      <section className="product spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="trending__product">
                <div className="row">
                  <div className="col-lg-8 col-md-8 col-sm-8">
                    <div className="section-title">
                      <h4>Top Rated</h4>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="btn__all">
                    <Link href={`/categories/12`} className="primary-btn">
                        View All <span className="arrow_right" />
                      </Link>
                    </div>
                  </div>
                </div>
                {/* <div className="row"> */}
                <TopRated />
                {/* </div> */}
              </div>
              <div className="popular__product">
                <div className="row">
                  <div className="col-lg-8 col-md-8 col-sm-8">
                    <div className="section-title">
                      <h4>Popular</h4>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="btn__all">
                      <Link href={`/categories/53`} className="primary-btn">
                        View All <span className="arrow_right" />
                      </Link>
                    </div>
                  </div>
                </div>
                {/* <div className="row"> */}
                <Popular />
                {/* </div> */}
              </div>
              <div className="recent__product">
                <div className="row">
                  <div className="col-lg-8 col-md-8 col-sm-8">
                    <div className="section-title">
                      <h4>Upcoming</h4>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="btn__all">
                    <Link href={`/categories/10752`} className="primary-btn">
                        View All <span className="arrow_right" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <Upcoming />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="product__sidebar">
                <div className="product__sidebar__view">
                  <div className="section-title">
                    <h5>Mystery</h5>
                  </div>
                  {/* <ul className="filter__controls">
                    <li className="active" data-filter="*">
                      Day
                    </li>
                    <li data-filter=".week">Week</li>
                    <li data-filter=".month">Month</li>
                    <li data-filter=".years">Years</li>
                  </ul> */}
                  <div className="filter__gallery">
                    <Mystery/>
                  </div>
                </div>
                <div className="product__sidebar__comment">
                  <div className="section-title">
                    <h5> Science Fiction</h5>
                  </div>
                  <Science/>
                </div>
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
