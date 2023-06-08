import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem('contacts')) ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  );

  const [filter, setFilter] = useState('');
  const [inputName, setInputName] = useState('');
  const [inputNumber, setInputNumber] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleInputChange = ({ target }) => {
    switch (target.name) {
      case 'name':
        setInputName(target.value);
        break;
      case 'number':
        setInputNumber(target.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    // const { name, number, contacts } = this.state;

    if (contacts.find(contact => contact.name === inputName)) {
      alert(`${inputName} is already in your phonebook`);
    } else if (contacts.find(contact => contact.number === inputNumber)) {
      alert('This number exist in your phonebook');
    } else {
      setContacts([
        ...contacts,
        createContact({ name: inputName, number: inputNumber }),
      ]);
    }

    evt.currentTarget.reset();
  };

  const createContact = data => {
    const newContact = {
      ...data,
      id: nanoid(),
    };
    return newContact;
  };

  const handleSearchChange = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const handleFilter = evt => {
    setFilter(evt.target.value);
  };

  const handleDeleteContact = id => {
    setContacts(() => contacts.filter(contact => contact.id !== id));
  };

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
      <Filter option={filter} handleFilter={handleFilter} />
      <ContactList
        handleDeleteContact={handleDeleteContact}
        options={handleSearchChange()}
      />
    </div>
  );
};
