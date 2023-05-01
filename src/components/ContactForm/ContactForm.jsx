import React, {useState} from "react";
import PropTypes from 'prop-types';
import css from './ContactForm.module.css'


function ContactForm({onSubmit}) {

    const[name, setName] = useState('');
    const[number, setNumber] = useState('');

// const handleNameChange = event => {
//     setName(event.target.value);
// };

// const handleNumberChange = event => {
//     setNumber(event.target.value);
// };

const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
        case 'name':
            setName(value);
            break;

            case 'number':
            setNumber(value);
            break;
    
        default:
            console.warm('This type of field is not processed');
    }
};

const handleSubmit = e => {
    e.preventDefault();

    onSubmit(name, number);
    resetName();
    resetNumber();
}

const resetName = () => {
    setName('')
  };

  const resetNumber = () => {
    setNumber('')
  };

    
        return (
            <form className={css.form} onSubmit={handleSubmit}>
            <label className={css.label}>
            Name
             <input
         type="text"
         name="name"
         value={name}
         onChange={handleChange}
         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
         required
        />
            </label>
           
            <label htmlFor="" className={css.label}>
            Number
            <input
        type="tel"
        name="number"
        value={number}
        onChange={handleChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        />
            </label>
        <button className={css.buttonSubmit} type="submit">Add contact</button>
            </form>
        )
    }



export default ContactForm;

ContactForm.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
}