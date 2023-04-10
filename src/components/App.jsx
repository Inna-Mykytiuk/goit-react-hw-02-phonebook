import { Component } from 'react';

import { GlobalStyle } from './GlobalStyle';
import { Section } from './Section/Section';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    ],
    name: '',
  };

  render() {
    return (
      <Container>
        <Section title="Phonebook"></Section>
        <GlobalStyle />
        <Section title="Contacts"></Section>
      </Container>
    );
  }
}
