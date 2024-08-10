import React, { useState, useMemo } from "react";
import { Row, Col, Container, Card, CardBody, CardTitle, } from "reactstrap"
import { cardData } from "../data/CardData";
import Pagination from "./Pagination";
import "../styles/Cards.css";

const Cards = () => {
    const PageSize = 16;

    const [currentPage, setCurrentPage] = useState(1);

    const rawData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return cardData.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);
    return (
        <React.Fragment>
            <div className="cards-bg">
                <Container>
                    <div className="check-out-some">
                        Check out some of the hottest Fire Kirin Games
                    </div>
                    <Row>
                        {rawData?.map((item, index) => (
                            <Col xs={12} sm={12} md={6} lg={3} xl={3} key={index + 1}>
                                <Card className="my-2 card-override">
                                    <img
                                        className="card-image"
                                        alt={index + 1}
                                        src={`../assets/game/${item?.image}`}
                                    />
                                    <CardBody className="card-body-override">
                                        <CardTitle className="guns-coins">{item?.name}</CardTitle>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    <Pagination
                        className="pagination-bar"
                        currentPage={currentPage}
                        totalCount={cardData?.length}
                        pageSize={PageSize}
                        onPageChange={(page) => setCurrentPage(page)}
                    />
                </Container>
            </div>
        </React.Fragment>
    )
};

export default Cards;
