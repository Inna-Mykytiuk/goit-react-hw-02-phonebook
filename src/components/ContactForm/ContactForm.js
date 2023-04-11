import React, { Component } from 'react';
// import { Form, Label, Input, Button } from './Phonebook.styled';

export class Phonebook extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.name, this.state.number);

    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

// export class ContactForm extends Component {
//   state = {
//     nameValue: '',
//     contactValue: '',
//   };

//   handleNameChange = evt => {
//     this.setState({ nameValue: evt.target.value });
//   };
//   handleContactdChange = evt => {
//     this.setState({ contactValue: evt.target.value });
//   };

//   handleSubmit = evt => {
//     evt.preventDefault();
//     const form = evt.currentTarget;
//     const contactName = form.elements.contactName.value;
//     const contact = form.elements.contact.value;
//     console.log(contactName, contact);

//     this.setState({ nameValue: '', contactValue: '' });
//   };

//   render() {
//     const { nameValue, contactValue } = this.state;
//     return (
//       <Formik onSubmit={this.handleSubmit}>
//         <form>
//           <div>
//             <div>
//               <label htmlFor="name">Name</label>
//               <input
//                 id="name"
//                 type="text"
//                 name="name"
//                 pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                 title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                 required
//                 placeholder="Enter your"
//                 value={nameValue}
//                 onChange={this.handleNameChange}
//               />
//             </div>
//             <label>
//               <label htmlFor="number">Number</label>
//               <input
//                 id="number"
//                 type="tel"
//                 name="number"
//                 pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                 title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                 required
//                 placeholder="+38 000 000 00 00"
//                 value={contactValue}
//                 onChange={this.handleContactdChange}
//               />
//             </label>
//           </div>

//           <button type="submit">Add contact</button>
//         </form>
//       </Formik>
//     );
//   }
// }
