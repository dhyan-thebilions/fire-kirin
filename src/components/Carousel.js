import React from "react";
import "../styles/Carousel.css";
import Slider from 'react-slick';
import { Container } from "reactstrap";

const Carousel = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            }
        ]
    };

    return (
        <div className="carousel-bg">
            <Container>
                <div className="text-wrapper">
                    <div className="play-the-hottest">
                        Play The Hottest Fire Kirin Games Today
                    </div>
                    <div className="explore-the-hottest">
                        Explore the hottest games with our latest FireKirin online sweepstakes, now featuring enhanced functionalities to elevate your experience. No need to download an app anymore—you can play online . Compete with other players, test your luck and skills, and earn rewards, all from your mobile phone or tablet.
                    </div>
                </div>
                <Slider {...settings} className="carousel-wrapper">
                    <div className="d-flex justify-content-center">
                        <img alt="test" src="../assets/carousel/carousel-1.png" />
                    </div>
                    <div className="d-flex justify-content-center">
                        <img alt="test" src="../assets/carousel/carousel-2.png" />
                    </div>
                    <div className="d-flex justify-content-center">
                        <img alt="test" src="../assets/carousel/carousel-3.png" />
                    </div>
                    <div className="d-flex justify-content-center">
                        <img alt="test" src="../assets/carousel/carousel-1.png" />
                    </div>
                    <div className="d-flex justify-content-center">
                        <img alt="test" src="../assets/carousel/carousel-1.png" />
                    </div>
                    <div className="d-flex justify-content-center">
                        <img alt="test" src="../assets/carousel/carousel-1.png" />
                    </div>
                    <div className="d-flex justify-content-center">
                        <img alt="test" src="../assets/carousel/carousel-2.png" />
                    </div>
                    <div className="d-flex justify-content-center">
                        <img alt="test" src="../assets/carousel/carousel-2.png" />
                    </div>
                    <div className="d-flex justify-content-center">
                        <img alt="test" src="../assets/carousel/carousel-2.png" />
                    </div>
                    <div className="d-flex justify-content-center">
                        <img alt="test" src="../assets/carousel/carousel-3.png" />
                    </div>
                    <div className="d-flex justify-content-center">
                        <img alt="test" src="../assets/carousel/carousel-3.png" />
                    </div>
                    <div className="d-flex justify-content-center">
                        <img alt="test" src="../assets/carousel/carousel-3.png" />
                    </div>
                </Slider>
                <div className="text-wrapper">
                    <div className="explore-the-hottest">
                        Simply fill out the contact form above to start playing Fire Kirin mobile sweepstakes from the comfort of your home. Top players are making thousands of dollars online by playing simple mobile sweepstakes games. With modern graphics, an intuitive design, buttery smooth animation, realistic scenes, and dramatic sound effects, Fire Kirin offers one of the most interactive and engaging mobile sweepstakes experiences. If you are a fan of traditional slot towers and fish tables, you should definitely try Fire Kirin.
                    </div>
                </div>
            </Container>
        </div>
    )
};

export default Carousel;
