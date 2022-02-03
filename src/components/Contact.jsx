import React from 'react';
import {Card, Col} from 'react-bootstrap'

const Contact = (props) => {
  return <Col md='4' style={{marginBottom:'1rem'}}>
     <Card>
  <Card.Body>
  <Card.Subtitle className="mb-2 text-muted">Contact Information</Card.Subtitle>
    <Card.Title>{props.contactInfo.name}</Card.Title>
    <Card.Text>
      <p>Phone Number: {props.contactInfo.email}</p>
      <p>Location: {props.contactInfo.location}</p>
    </Card.Text>
    <Card.Link href="#">Edit</Card.Link>
    <Card.Link href="#">Delete</Card.Link>
  </Card.Body>
</Card>
  </Col>;
}

export default  Contact;
