import React from "react";
import { Row, Col, Card, Container } from "reactstrap";
import "../styles/Download.css";

const Download = () => {
    return (
        <React.Fragment>
            <div className="download-bg">
                <Container>
                    <div className="download-the-firekirn">Download the firekirn App</div>
                    <div className="follow-these-steps">
                        Follow these steps to download and install the firekirin app on your
                        device
                    </div>
                </Container>
                <Container className="d-flex justify-content-center">
                    <Row>
                        <Col xs={12} sm={12} md={6} lg={6}>
                            <Card className="card-download">
                                <div className="img-wrapper">
                                    <img
                                        className="store-img"
                                        alt="google"
                                        src="../assets/google-play.svg"
                                    />
                                </div>
                                <div className="download-txt">Download for Android</div>
                                <button
                                    className="download-button"
                                    onClick={() =>
                                        window.open("http://start.firekirin.xyz:8580", "_blank")
                                    }
                                >
                                    <span className="download-button-txt">
                                        Download app for Android
                                    </span>
                                </button>
                            </Card>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6}>
                            <Card className="card-download">
                                <div className="img-wrapper">
                                    <img
                                        className="store-img"
                                        alt="app"
                                        src="../assets/app-store.svg"
                                    />
                                </div>
                                <div className="download-txt">Download for iOS</div>
                                <button
                                    className="download-button"
                                    onClick={() =>
                                        window.open("http://start.firekirin.xyz:8580", "_blank")
                                    }
                                >
                                    <span className="download-button-txt">
                                        Download app for iOS
                                    </span>
                                </button>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <div className="follow-us-our">
                        Follow us our Facebook official page
                    </div>
                    <div className="download-image-wrapper">
                        <div className="facebook-icons">
                            <div
                                className="facebook-fill"
                                onClick={() =>
                                    window.open(
                                        "https://www.facebook.com/Firekirinonline77",
                                        "_blank"
                                    )
                                }
                            >
                                <img
                                    className="vector-icon2"
                                    alt=""
                                    src="../assets/facebook-icon.svg"
                                />
                            </div>
                            <div
                                className="facebook-fill"
                                onClick={() =>
                                    window.open(
                                        "https://www.facebook.com/profile.php?id=61551686566639",
                                        "_blank"
                                    )
                                }
                            >
                                <img
                                    className="vector-icon2"
                                    alt=""
                                    src="../assets/facebook-icon.svg"
                                />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default Download;
