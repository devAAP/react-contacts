import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        { 
          name: 'Richard cruxie',
          phone: '0268547380',
          location: 'Dansoman'
        },
        {
          name: 'Aku Shika',
          phone: '05999994245',
          location: 'Dansoman'
        },
        { 
          name: 'Stallione Dee',
          phone: '+444010123556',
          location: 'New Hampshire'
        }
      ],
    }
  }

addNewContact=(contact) => {
  this.setState({
    contacts: [...this.state.contacts, contact]
  })
}
  render(){
   
    return (
      <>
      <Container fluid style={{marginTop: '2rem'}}>
        <Row>
      <Col md='4'>
        <ContactForm addContact = {this.addNewContact}/>
      </Col>
      <Col>
      <ContactList contactsData={this.state.contacts} />
      </Col>
        </Row>
      </Container>
        
      </>
    );
  }
  }
  

export default App;