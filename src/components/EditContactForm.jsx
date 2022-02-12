import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap'

class EditContactForm extends Component{
  constructor(props) {
    super(props);
      this.state= { 
          name: props.contactInfo.name,
          location: props.contactInfo.location,
          number: props.contactInfo.phone, 
          id: props.contactInfo.id
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
    this.props.editContact(this.state.id, this.state);
    this.setState({
        name: '',
        location: '',
        number: ''   
    });
    this.props.closeModal();
    // console.log('formSubmitted:', this.state);
}

addNewContact = (contact) => {
    this.setState({
        contacts: [...this.state.contacts, contact]
    })
}

editContact = (id, updatedcontact) => {
    this.setState({
    contacts: this.state.contacts.map(contact =>contact.id===id ? updatedcontact : contact)
    })
  }

  ditUser = (id, updatedContact) => {
      this.setState({
      contacts: this.state.users.map(contact =>contact.id===id ? updatedContact : contact)
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
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" placeholder="Enter location" name="location" value={this.state.location} onChange={this.handleChange} />
        </Form.Group>
          
        <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="text" placeholder="Enter phone number" name="phone number" value={this.state.number} onChange={this.handleChange} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
    
  }

}


  export default EditContactForm;