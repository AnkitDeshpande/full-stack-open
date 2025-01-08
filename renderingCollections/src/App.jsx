import { useState } from "react";
import Note from "./Note";

const App = (props) => {

  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState('a new note');
  const [showAll, setShowAll] = useState(true);

  const notesToshow = showAll
    ? notes
    : notes.filter((note) => note.important === true);

  const addNote = (event) => {
    event.preventDefault();
    console.log("button clicked -> ", event.target);
    const newObj = {
      content: newNote,
      important: Math.random() < .5,
      id: String(notes.length + 1)
    };
    setNotes(notes.concat(newObj));
    setNewNote('');
  }

  const handleNoteChange = (inputEvent) => {
    console.log(inputEvent.target.value);
    setNewNote(inputEvent.target.value);
  }

  const handleShow = () => {
    setShowAll(!showAll);
  }

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notesToshow.map(note => <Note key={note.id} note={note} />)}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
        <button onClick={handleShow}>show {showAll ? 'important' : 'all'}</button>
      </form>
    </div>
  );
}

export default App;