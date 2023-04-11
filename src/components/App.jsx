import { Component } from 'react';
import { nanoid } from 'nanoid';
import { GlobalStyle } from './GlobalStyle';
import { Section } from './Section/Section';
import { Container } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
// import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    ],
    filter: '',
  };

  //створюємо метод, який буде додавати контакти в і перевіряти чи є вже такий контакт, якщо є, то виводить повідомлення про це
  addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`you already have ${name} in your contacts`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  //створюємо метод, який буде видаляти контакти зі списку контактів по id контакту і перезаписуємо стейт, якщо id не співпадає з id контакту, який ми хочемо видалити
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  //створюємо метод, який буде змінювати значення фільтра для того щоб фільтрувати контакти по імені
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  //створюємо метод, який буде фільтрувати контакти по імені
  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    return (
      <Container>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.addContact} />
        </Section>
        <GlobalStyle />
        <Section title="Contacts">{/* <ContactList /> */}</Section>
      </Container>
    );
  }
}
