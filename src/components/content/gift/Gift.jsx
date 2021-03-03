import React from "react";
import {Container, Col, Row, Image} from "react-bootstrap";
import menImage from './menDisney.jpg';
import girlImage from './girlDisney.jpg';
import kidImage from './kidDisney.jpg';
import './Gift.css';

export function Gifts (props) {
    return <>
        <h2>Gifts</h2>
        <Container>
        <Row>
            <Col xs={6} md={4}>
                <Image src={menImage} rounded
                       width="270"
                       height="320"/>
                <p>Gifts for him</p>
            </Col>
            <Col xs={6} md={4}>
                <Image src={girlImage} rounded
                       width="240"
                       height="320"/>
                <p>Gifts for her</p>
            </Col>
            <Col xs={6} md={4}>
                <Image src={kidImage} rounded
                       width="240"
                       height="320"/>
                <p>Gifts for kids</p>
            </Col>
        </Row>
    </Container>
    </>
    // return <tr>
    //     <td>{props.themePark.id}</td>
    //     <img
    //         src="https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/640/360/75/dam/disneyland/experience-updates/mickey-character-castle-16x9.jpg?1593556896598"
    //         alt="new"
    //     />
    // </tr>
}