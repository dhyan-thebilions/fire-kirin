import React from "react";
import "../styles/Footer.css";
import { Container } from "reactstrap";

const Footer = () => {
    return (
        <React.Fragment>
            <div className="footer-bg">
                <Container>
                    <div className="footer-txt-wrapper">
                        <div className="footer-txt">
                            Fire Kirin is the hottest sweepstakes game suite available today.
                            Enjoy countless hours of mesmerizing gameplay from the comfort and
                            safety of your own home by accessing the <span className="fire-kirin-portal"> Fire Kirin online portal.</span>No
                            downloads necessary—just visit the website and start playing
                            instantly. Experience the excitement of Fire Kirin safely at home by
                            visiting the online portal now.
                        </div>
                    </div>
                    <div className="footer-image">
                        <img alt="" src="../assets/footer-img.svg" />
                    </div>
                    <div className="copyright">
                        Copyright © 2024 Fire Kirin Online Game. All Rights Reserved.
                    </div>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default Footer;
