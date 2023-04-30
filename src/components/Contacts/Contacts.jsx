import React from "react";
import PropTypes from 'prop-types';
import css from './Contacts.module.css'


const Contacts = ({contacts, filter, onDelete}) => {
    const normalizeFilter = filter.toLowerCase();
    const filterContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter),);

    return (
        <ul className={css.list}>
        {filterContacts.map(({id, name, number}) => (
          <li
          className={css.contactItem}
          key={id}>
            <p className={css.nameContact}>{name}: {number}</p>
            <button  className={css.buttonDelete} type="button" onClick={() => onDelete(id)}>Delete</button>
          </li>
        ))}
        
       </ul>
        )
}


export default Contacts;

Contacts.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
    filter: PropTypes.string.isRequired,
  };