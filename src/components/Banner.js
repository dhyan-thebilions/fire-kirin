import React from "react";
import "../styles/Banner.css";

const Banner = () => {
    return (
        <div className="banner-bg">
            <div className="banner-wrapper">
                <div className="the-ultimate-fish">
                    The Ultimate Fish Games and Slots
                </div>
                <div className="fire-kirin-online">Fire Kirin Online Sweepstakes</div>
                <button
                    className="banner-button"
                    onClick={() =>
                        window.open("https://www.facebook.com/Firekirinonline77", "_blank")
                    }
                >
                    <span className="get-free-fire">Get Free Fire Kirin Account</span>
                </button>
            </div>
        </div>
    );
};

export default Banner;
