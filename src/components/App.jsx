import React from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contanctsLS = JSON.parse(localStorage.getItem('contacts'));
    if (contanctsLS) {
      this.setState({ contacts: contanctsLS });
    }
  }

  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  handleInputChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { name, number, contacts } = this.state;

    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in your phonebook`);
    } else if (contacts.find(contact => contact.number === number)) {
      alert('This number exist in your phonebook');
    } else {
      this.setState(prevState => ({
        contacts: [
          ...prevState.contacts,
          this.createContact({
            name: name,
            number: number,
          }),
        ],
      }));
    }

    evt.currentTarget.reset();
  };

  createContact = data => {
    const newContact = {
      ...data,
      id: nanoid(),
    };
    return newContact;
  };

  handleSearchChange = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  handleFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { state, handleInputChange, handleSubmit, handleFilter } = this;
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 20,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />

        <h2>Contacts</h2>
        <Filter option={state.filter} handleFilter={handleFilter} />
        <ContactList
          handleDeleteContact={this.handleDeleteContact}
          options={this.handleSearchChange()}
        />
      </div>
    );
  }
}
