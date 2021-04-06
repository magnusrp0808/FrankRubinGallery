import React from "react";
import "./styles.css"

import { Container, Col, Row, Image } from "react-bootstrap"

import data from './data/pictures.json';

import { Link } from "react-router-dom";

function ImageForm(props) {
    const picture = props.picture;

    return (
        <Container className="mx-auto mt-4" bg="light">
            <Row className="justify-content-md-left">
                <Col xs={6}>
                    <Image src={`${process.env.PUBLIC_URL}/img/${picture.image}`}/>
                </Col>
                <Col xs={6}>
                    <h1>{picture.title}</h1>
                    <p><b>Date: </b>{picture.date}</p>
                    <p><b>Type: </b>{picture.type}</p>
                    <p><b>Description: </b>{picture.longDesc}</p>
                </Col>
            </Row>
        </Container>
    );
  }

export default function PictureDescription(props) {
    const topicId = props.match.params.topicId;
    const picture = data.find(e => e.id == topicId);
    return (
        <div className="PictureDescription">
            <ImageForm picture={picture}/>
        </div>
    );
}