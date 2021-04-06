import React from "react";
import "./styles.css";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function ContactForm(props) {
  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={5} placeholder="Enter message" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Send
      </Button>
    </Form>
  );
}

function MakeContactSection(props) {
  return (
    <Card id={props.id} className="mx-auto mt-4" bg="light" style={{ maxWidth: '60%'}}>
      <Card.Body>
        <Card.Title><b>Contact</b></Card.Title>
        <hr/>
        <ContactForm/>
      </Card.Body>
    </Card>
  );
}

export default function Contact() {
  return (
    <div className="Contact">
      <MakeContactSection/>
    </div>
  );
}