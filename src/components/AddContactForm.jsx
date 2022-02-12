import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';

export default class ContactForm extends Component {
    constructor(props){
        super(props);
        this.state= { 
            name: '',
            location: '', 
            number: ''
        }
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({
        [e.target.name]: e.target.value,
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addContact(this.state);
        this.setState({
            name: '',
            location: '',
            number: '' 
             
        });
        console.log('formSubmitted:', this.state);
    }

    
    addNewContact = (contact) => {
        this.setState({
            contacts: [...this.state.contacts, contact]
        })
    }
    render() {
    return (
        <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" name="name" value={this.state.name} onChange={this.handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicLocation">
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" placeholder="Enter location" name="location" value={this.state.location} onChange={this.handleChange} />
        </Form.Group>
          
        <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="text" placeholder="Enter phone number" name="number" value={this.state.number} onChange={this.handleChange} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
    
  }
}