import React, {Component} from "react";
import PropTypes from 'prop-types';
import css from './ContactForm.module.css'


class ContactForm extends Component{
state = {
    name: '',
    number: '',
};

handleChange = event => {
    const {name, value} = event.target;
    this.setState({
        [name]:value})
  };

handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.name, this.state.number);
    this.reset();
}

reset = () => {
    this.setState({name: '', number: ''})
  }

    render() {

        const{name, number} = this.state
        return (
            <form className={css.form} onSubmit={this.handleSubmit}>
            <label className={css.label}>
            Name
             <input
         type="text"
         name="name"
         value={name}
         onChange={this.handleChange}
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
        onChange={this.handleChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        />
            </label>
        <button className={css.buttonSubmit} type="submit">Add contact</button>
            </form>
        )
    }
} 


export default ContactForm;

ContactForm.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
}