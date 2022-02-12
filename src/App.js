import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import AddContactForm from './components/AddContactForm';
import ContactList from './components/ContactList';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        { 
          name: 'Richard cruxie',
          phone: '0268547380',
          location: 'Dansoman',
          id: "uwqms6729"
        },
        {
          name: 'Aku Shika',
          phone: '05999994245',
          location: 'Dansoman',
          id: "kiwas9802"
        },
        { 
          name: 'Stallione Dee',
          phone: '+444010123556',
          location: 'New Hampshire',
          id: "sadie02432"
        }
      ],
    }
  }

addNewContact=(contact) => {
  contact.id=Math.random().toString()
  this.setState({
    contacts: [...this.state.contacts, contact]
  })
}

editContact= (id, updatedContact) => {
  this.setState({
    contacts: this.state.contacts.map(contact => contact.id===id ? updatedContact: contact)
  })
}
deleteContact=(id) =>{
  let undeletedContacts = this.state.contacts.filter(contact => contact.id !== id);
this.setState({
  contacts: undeletedContacts
})
}
  render(){
   
    return (
      <>
      <Container fluid style={{marginTop: '2rem'}}>
        <Row>
      <Col md='4'>
        <h4>Add Contact</h4>
        <AddContactForm addContact = {this.addNewContact}/>
       </Col>
      <Col>
      <h4>Contact List</h4>
      <ContactList contactsData={this.state.contacts} deleteContact = {this.deleteContact} editContact={this.editContact}/>
      </Col>
        </Row>
      </Container>
        
      </>
    );
  }
  }
  

export default App;