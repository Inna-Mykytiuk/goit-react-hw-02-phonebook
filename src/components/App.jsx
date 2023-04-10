import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Container } from './App.styled';
import { Section } from './Section/Section';

export class App extends Component {
  render() {
    return (
      <Container>
        <GlobalStyle />
        <Section title="Phone book"></Section>
        <Section title="Contacts"></Section>
      </Container>
    );
  }
}
