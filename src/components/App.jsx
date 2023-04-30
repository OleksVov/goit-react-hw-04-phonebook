
import React, {Component} from "react";
import { nanoid } from 'nanoid'
import Filter from "./Filter/Filter";
import Contacts from "./Contacts/Contacts";
import ContactForm from "./ContactForm/ContactForm";

class App extends Component {
  state = {
    contacts: [
      {id:nanoid(), name: 'Rosie Simpson', number: '459-12-56'},
      {id: nanoid(), name: 'Hermione Kline', number: '443-89-12'},
      {id: nanoid(), name: 'Eden Clements', number: '645-17-79'},
      {id: nanoid(), name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  };
// saving in LocalStorage
  componentDidUpdate(prevProps, prevState) {
   if (this.state.contacts !== prevState.contacts) {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
   }
  }

  componentDidMount () {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if(parsedContacts) {
      this.setState({contacts: parsedContacts});
    } 
  }

  checkExistingContact = (array, newName) => {
    return array.some(({ name }) => {
      return newName.toLowerCase() === name.toLowerCase();
    });
  };


  addContacts = (name,number) => {
    const checkContact =this.checkExistingContact(this.state.contacts, name);
    if (checkContact) {
      alert (`${name} is already in contacts`)
      return;
    }
    
    this.setState(
      prevState => ({
        contacts: [
          ...prevState.contacts,
        { id: nanoid(), name: name, number: number},
        ]
      })
    )
  }
  
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = event => {
    this.setState({filter:event.target.value})
  }

  render() {

    const {filter, contacts} = this.state;
    

    return (
      <div style={{
        padding: 40,
      }}>
        <h1>Phonebook</h1>
        <ContactForm 
        onSubmit={this.addContacts}
        />
      
       <h2>Contacts</h2>
       <Filter value={filter} onChange={this.changeFilter}/>
       <Contacts
       contacts={contacts}
       filter={filter}
       onDelete={this.deleteContact}/>
      
      </div>
    );
  }
  
};
export default App;
