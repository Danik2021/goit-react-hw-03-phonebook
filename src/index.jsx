import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// libraries
import { nanoid } from 'nanoid';

// components
import { Phonebook } from 'components/Phonebook/Phonebook';
import { Contacts } from 'components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Billy Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Bobby Kline', number: '443-89-12' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    if (contacts) {
      this.setState({
        contacts: JSON.parse(contacts),
      });
    }
  }

  onTypeName = e => {
    this.setState({
      name: e.target.value,
    });
  };

  onTypeNumber = e => {
    this.setState({
      number: e.target.value,
    });
  };

  onFilterChange = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  addContact = e => {
    e.preventDefault();
    const { name: newContactName, number, contacts } = this.state;
    if (
      contacts.some(
        ({ name }) => newContactName.toLowerCase() === name.toLowerCase(),
      )
    ) {
      alert(`${newContactName} is already in contacts.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name: newContactName,
      number: number,
    };
    localStorage.setItem('contacts', JSON.stringify([...contacts, newContact]));
    this.setState(({ contacts }) => {
      return {
        contacts: [...contacts, newContact],
      };
    });
  };

  onDeleteContact = idToDelete => {
    const { contacts } = this.state;
    localStorage.setItem(
      'contacts',
      JSON.stringify(contacts.filter(({ id }) => id !== idToDelete)),
    );
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ id }) => id !== idToDelete),
    }));
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <Phonebook
          onTypeName={this.onTypeName}
          onTypeNumber={this.onTypeNumber}
          addContact={this.addContact}
        />
        <h2>Contacts</h2>
        <Filter onFilterChange={this.onFilterChange} />
        <Contacts
          onDeleteContact={this.onDeleteContact}
          contacts={this.state.contacts}
          filter={this.state.filter}
        />
      </>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
