import { useEffect, useState } from 'react'
import Filter from './Filter';
import PersonForm from './PersonForm';
import Persons from './Persons';
import axios from 'axios';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [number, setNumber] = useState('');
  const [newId, setNewId] = useState(5);
  const [filterTerm, setFilterTerm] = useState('');

  useEffect(() => {
    axios.get("http://localhost:3001/persons")
      .then(res => res.data)
      .then(data => {
        console.log(data)
        setPersons(data);
      });
  }, []);

  const addName = (event) => {
    event.preventDefault();
    const newObj = {
      name: newName,
      number: number,
      id: newId
    };
    if (persons.some(person => person.name.toLowerCase() === newName.toLowerCase())) {
      alert(`${newName} is already present`);
      return;
    }
    const updatedPersons = [...persons, newObj];
    setPersons(updatedPersons);
    setNewName('');
    setNumber('');
    setNewId(newId + 1);
    console.log(updatedPersons);
  };

  const readName = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  }

  const readNumber = (event) => {
    console.log(event.target.value);
    setNumber(event.target.value);
  }

  const filter = (event) => {
    console.log(event.target.value);
    setFilterTerm(event.target.value);
  }

  const handleDelete = (id) => {
    if (confirm("Do you wanna delete this person?")) {
      axios.delete(`http://localhost:3001/persons/${id}`)
        .then(() => {
          setPersons((prevPersons) => prevPersons.filter(person => person.id !== id));
          console.log('Deleted successfully');
        })
        .catch((error) => {
          console.error('Error deleting the person:', error);
          alert('Failed to delete the person.');
        });
      console.log('deleted');
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filterTerm={filterTerm} filter={filter} />

      <h3>Add a new</h3>

      <PersonForm newName={newName} readName={readName} number={number} readNumber={readNumber} addName={addName} />

      <h3>Numbers</h3>

      <Persons persons={persons} filterTerm={filterTerm} handleDelete={handleDelete} />
    </div>
  )
}

export default App

