import {React, useState} from "react";
import "./styles.css";

import Button from 'react-bootstrap/Button';
import CardColumns from 'react-bootstrap/CardColumns'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

import { Col, Row } from 'react-bootstrap'

import { Link } from "react-router-dom";

import InsideBob_Trailer from './img/InsideBob_Trailer.gif';

import data from './data/pictures.json';

function MakeFilterSection(props){
    return(
        <Card>
            <Card.Body>
                <Card.Title>Filter</Card.Title>
                <Form onSubmit={e => e.preventDefault()}>
                    <Form.Group controlId="filter.title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" onChange={e => props.setTitle(e.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId="filter.type">
                        <Form.Label>Type</Form.Label>
                        <Form.Control as="select" onChange={e => props.setType(e.target.value)}>
                        <option>Any</option>
                        <option>Painting</option>
                        <option>Print</option>
                        <option>Tryk</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
    );
}

function MakePictureEntry(props){
  const title = props.picture.title;
  const desc = props.picture.shortDesc;
  const imageSrc = props.picture.image;

  return(
    <Card>
        <Link to={`/picture/${props.picture.id}`}>
            <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/img/${imageSrc}`} />
        </Link>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {desc}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
  );
}

function MakeCardGroup(props){

    const pictures = data.filter(picture => {
        const titleMatch = picture.title.toLowerCase().includes(props.searchTerms.title.toLowerCase());
        const typeMatch = props.searchTerms.type == "Any" || props.searchTerms.type == picture.type;
        return titleMatch && typeMatch;
    }).map(picture => {
        return (<MakePictureEntry key={picture.id} picture={picture}/>);
    })

    return(
        <CardColumns className="mx-auto mt-4" bg="light">
        {pictures}
        </CardColumns>
    );
}


export default function Gallery() {
    const [title, setTitle] = useState("");
    const [type, setType] = useState("Any");
    const searchTerms = {title:title, type:type};

    return (
        <div className="Gallery mx-auto" style={{ maxWidth: '60%'}}>
            <Row>
                <Col style={{ maxWidth: '30%'}}>                 
                    <MakeFilterSection setTitle={setTitle} setType={setType}/>
                </Col>
                <Col>
                    <MakeCardGroup searchTerms={searchTerms}/>
                </Col>
            </Row>
        </div>
    );
}
