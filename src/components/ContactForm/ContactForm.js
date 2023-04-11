import { Formik } from 'formik';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';

// export const ContactForm = ({ onSubmit }) => {
//   const handleSubmit = (values, actions) => {
//     const contact = {
//       id: nanoid(6),
//       ...values,
//     };
//     onSubmit(contact);
//     actions.resetForm();
//   };

//   return (
//     <Formik initialValues={{ name: '', number: '' }} onSubmit={handleSubmit}>
//       {props => {
//         return (
//           <form>
//             <div>
//               <div>
//                 <label htmlFor="name">Name</label>
//                 <input
//                   id="name"
//                   type="text"
//                   name="name"
//                   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                   title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                   required
//                   placeholder="Enter your"
//                   value={props.values.name}
//                   onChange={props.handleChange}
//                 />
//               </div>
//               <label>
//                 <label htmlFor="number">Number</label>
//                 <input
//                   id="number"
//                   type="tel"
//                   name="number"
//                   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                   title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                   required
//                   placeholder="+38 000 000 00 00"
//                   value={props.values.number}
//                   onChange={props.handleChange}
//                 />
//               </label>
//             </div>

//             <button type="submit">Add contact</button>
//           </form>
//         );
//       }}
//     </Formik>
//   );
// };

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.name, this.state.number);

    this.setState({ name: '', number: '' });
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  nameInput = nanoid();
  telInput = nanoid();

  render() {
    // const { name, number } = this.state;

    return (
      <Formik
        initialValues={{ name: '', number: '' }}
        onSubmit={this.handleSubmit}
      >
        {props => {
          return (
            <form>
              <div>
                <div>
                  <label htmlFor={this.nameInput}>Name</label>
                  <input
                    id={this.nameInput}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    placeholder="Enter your"
                    value={props.values.name}
                    onChange={props.handleChange}
                  />
                </div>
                <label>
                  <label htmlFor={this.telInput}>Number</label>
                  <input
                    id={this.telInput}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    placeholder="+38 000 000 00 00"
                    value={props.values.number}
                    onChange={props.handleChange}
                  />
                </label>
              </div>

              <button type="submit">Add contact</button>
            </form>
          );
        }}
      </Formik>
    );
  }
}
