import React from "react";
import { Row, Col, Container } from "reactstrap"
import "../styles/Description.css";

const Description = () => {
    return (
        <React.Fragment>
            <div className="description-bg">
                <Container>
                    <div className="what-exactly-is">
                        What exactly is Fire Kirin?
                    </div>
                    <div className="fire-kirin-is">
                        Fire Kirin is one of the world’s hottest sweepstakes gaming platforms, offering a thrilling and immersive experience for gaming enthusiasts. With a diverse selection of games, including fish games, slots, and keno, Fire Kirin promises endless entertainment and the chance to win big.
                    </div>
                    <Row className="variety-wrapper">
                        <Col xs={12} sm={12} md={12} lg={4}>
                            <div className="variety-of-games">
                                Variety of Games
                            </div>
                            <div className="from-the-fast-paced">
                                From the fast-paced action of fish games to the excitement of slots and the strategic challenge of keno, Fire Kirin has something for everyone.
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={4}>
                            <div className="variety-of-games">
                                Play Anywhere
                            </div>
                            <div className="from-the-fast-paced">
                                Whether you prefer playing online from your computer or on the go with our app, Fire Kirin provides seamless access to your favorite games.
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={4}>
                            <div className="variety-of-games">
                                User-Friendly Experience
                            </div>
                            <div className="from-the-fast-paced">
                                Our platform is designed with you in mind, offering easy navigation, secure transactions, and top-notch customer support.
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        </React.Fragment>
    )
};

export default Description;
