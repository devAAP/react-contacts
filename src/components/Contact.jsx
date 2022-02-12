import React, {useState} from 'react';
import {Card, Col, Button, Modal} from 'react-bootstrap'
import EditContactForm from './EditContactForm'


const Contact = (props) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
   

  const handleDelete =(e)=> {
    e.preventDefault();
    // console.log("item Deleted");
    props.deleteContact(props.contactInfo.id);
  }
  return (
    <>
<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditContactForm contactInfo={props.contactInfo} editContact={props.editContact} closeModal={handleClose} />
        </Modal.Body>
      </Modal>

    <Col md='4' style={{marginBottom:'1rem'}}>
       <Card>
    <Card.Body>
    <Card.Subtitle className="mb-2 text-muted">Contact Information</Card.Subtitle>
      <Card.Title>{props.contactInfo.name}</Card.Title>
      <Card.Text>
        <p>Location: {props.contactInfo.location}</p>
        <p>Phone number: {props.contactInfo.phone}</p>
      </Card.Text>
      <Card.Link href="#" onClick={handleShow}>
        <Button variant="primary" size="sm">Edit</Button>
        </Card.Link>
      <Card.Link href="#"><Button variant="danger" size="sm" onClick={handleDelete}>Delete</Button>
      </Card.Link>
    </Card.Body>
  </Card>
    </Col>
    </>
    
  )
 
}

export default  Contact;
