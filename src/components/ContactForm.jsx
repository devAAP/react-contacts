import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';

export default class ContactForm extends Component {
    constructor(props){
        super(props);
        this.state= { 
            name: '',
            number: '', 
            location: ''
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
        this.props.addUser(this.state);
        this.setState({
            name: '',
            number: '', 
            location: '' 
        });
        console.log('formSubmitted:', this.state);
    }
    addNewContact = (user) => {
        this.setState({
            users: [...this.state.users, user]
        })
    }
    render() {
    return (
        <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" name="name" value={this.state.name} onChange={this.handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Phone number</Form.Label>
          <Form.Control type="number" placeholder="Enter phone number" name="number" value={this.state.number} onChange={this.handleChange} />
        </Form.Group>
          
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" placeholder="location" name="location" value={this.state.location} onChange={this.handleChange} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
    
  }
}