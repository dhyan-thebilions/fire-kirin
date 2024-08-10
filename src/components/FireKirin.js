import React from "react";
import "../styles/FireKirin.css";
import { Row, Col, Container } from "reactstrap";

const FireKirin = () => {
    return (
        <React.Fragment>
            <div className="firekirin-bg">
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={6}>
                            <div className="fire-kirin-fish">
                                Fire Kirin Fish Games and Slots
                            </div>
                            <div className="fire-kirin-offers">
                                Fire Kirin offers a diverse collection of highly engaging online
                                sweepstakes fish games and slot games. Popular titles include Arc
                                of Templar, Ocean King, Baby Octopus, Circus, Crocodile Adventure,
                                Eagle Eye, Fire Kirin, Fish Chopper, Golden Toad, Golden Tree,
                                King Crab, Magical Ship, Meteor Shower, Ocean Monster, Spirit
                                Stallion, Dragon vs. Phoenix, Deepsea Volcano, Buffalo 777, Merry
                                Christmas, Fruit Party, Happy Duck, Keno Ball, Fruit 777, Lucky
                                777, and Happy Farm. The main objective is simple: the more you
                                play, the more you win. Fire Kirin provides an immersive and
                                interactive mobile sweepstakes experience that you can enjoy
                                safely and comfortably from your home.
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={6}>
                            <div className="fire-kirin-image">
                                <img
                                    alt="test"
                                    src="../assets/fire-kirin.svg"
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default FireKirin;
