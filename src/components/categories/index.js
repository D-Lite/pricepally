import React from "react";

var $ = require("jquery");
if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
}

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});

const Responsive = {
    0:{
        items:2.5
    },
    600:{
        items:3
    },
    1000:{
        items:4
    }
}
export default function categories() {
    return (
            <section className="categoires_wrapper mt-3 mb-3 d-lg-block">
                <div className="container">
                    <div id="categoires-bg">
                        <div className="row">
                            <div className="col-6 col-md-6 col-lg-6">
                                <h4 className="heading">Categories</h4>
                            </div>
                            <div className="col-6 col-md-6 col-lg-6 text-right">
                                <a href="#" className="text-uppercase brown-text viewall-btn">View All</a>
                            </div>
                        </div>
                        <div id="folloersSlider" className="dvslider">
                            <OwlCarousel responsive={Responsive} loop={"true"}>
                                <div className="item">
                                    <div className="followers-inner">
                                        <a href="listing.html">
                                            <img src="assets/images/foodstuff-img.png" />
                                        </a>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="followers-inner">
                                        <a href="listing.html">
                                            <img src="assets/images/packfood_img.png" />
                                        </a>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="followers-inner">
                                        <a href="listing.html">
                                            <img src="assets/images/fruits-img.png" />
                                        </a>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="followers-inner">
                                        <a href="listing.html">
                                            <img src="assets/images/packfood_img.png" />
                                        </a>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="followers-inner">
                                        <a href="listing.html">
                                            <img src="assets/images/foodstuff-img.png" />
                                        </a>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>

                </div>
            </section>

)
}