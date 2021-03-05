import React from "react";
import {Container, Col, Row, Image} from "react-bootstrap";
import menImage from '../../../images/menDisney.jpg';
import girlImage from '../../../images/girlDisney.jpg';
import kidImage from '../../../images/kidDisney.jpg';
import './Gift.css';

export function Gifts () {
    return <>
        <h2>Gifts</h2>
        <Container>
        <Row>
            <Col xs={6} md={4}>
                <Image src={menImage} rounded
                       width="270"
                       height="320"/>
                <p className="giftName">Gifts for him</p>
            </Col>
            <Col xs={6} md={4}>
                <Image src={girlImage} rounded
                       width="240"
                       height="320"/>
                <p className="giftName">Gifts for her</p>
            </Col>
            <Col xs={6} md={4}>
                <Image src={kidImage} rounded
                       width="240"
                       height="320"/>
                <p className="giftName">Gifts for kids</p>
            </Col>
        </Row>
    </Container>
    </>
}