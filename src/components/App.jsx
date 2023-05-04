
import React, {useState, useEffect} from "react";
import { nanoid } from 'nanoid'
import Filter from "./Filter/Filter";
import Contacts from "./Contacts/Contacts";
import ContactForm from "./ContactForm/ContactForm";

const App =() => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
 
// saving in LocalStorage

useEffect(() => {
 
      localStorage.setItem('contacts', JSON.stringify(contacts))
     
},[contacts]);
 

useEffect(() => {
  const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if(parsedContacts) {
      setContacts([
        {id:nanoid(), name: 'Rosie Simpson', number: '459-12-56'},
      {id: nanoid(), name: 'Hermione Kline', number: '443-89-12'},
      {id: nanoid(), name: 'Eden Clements', number: '645-17-79'},
      {id: nanoid(), name: 'Annie Copeland', number: '227-91-26'},
      ]);
    } 
},[])

 

  const checkExistingContact = (array, newName) => {
    return array.some(({ name }) => {
      return newName.toLowerCase() === name.toLowerCase();
    });
  };


  const addContacts = (name,number) => {
    const checkContact =checkExistingContact(contacts, name);
    if (checkContact) {
      alert (`${name} is already in contacts`)
      return;
    }
    
    setContacts (
      prevState => [...prevState,
        { id: nanoid(), name: name, number: number},])
  };
  
  const deleteContact = contactId => {
    setContacts(prevState =>prevState.filter(contact => contact.id !== contactId));
  
  };

  const changeFilter = event => {
    setFilter(event.target.value)
  }



    return (
      <div style={{
        padding: 40,
      }}>
        <h1>Phonebook</h1>
        <ContactForm 
        onSubmit={addContacts}
        />
      
       <h2>Contacts</h2>
       <Filter value={filter} onChange={changeFilter}/>
       <Contacts
       contacts={contacts}
       filter={filter}
       onDelete={deleteContact}/>
      
      </div>
    );
  
  
};
export default App;
