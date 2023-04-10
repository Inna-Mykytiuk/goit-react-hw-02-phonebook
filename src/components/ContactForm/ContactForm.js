import { Formik } from 'formik';
import { nanoid } from 'nanoid';

import { Component } from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { GiSmartphone } from 'react-icons/gi';

// свторимо компоненту ContactForm

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const contact = {
      id: nanoid(),
      name,
      number,
    };


  render() {
    const { name, number } = this.state;

    return (
      <Formik>
        <form>
          <label>
            Name
            <input
              type="text"
              name="name"
              id={this.nameInput}
              value={name}
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />{' '}
            <BsFillPersonFill
              style={{
                position: 'absolute',
                top: '50%',
                left: '10px',
                transform: 'translateY(-50%)',
              }}
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              id={this.telInput}
              value={number}
              onChange={this.handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <GiSmartphone
              style={{
                position: 'absolute',
                top: '50%',
                left: '10px',
                transform: 'translateY(-50%)',
              }}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
      </Formik>
    );
  }
}
