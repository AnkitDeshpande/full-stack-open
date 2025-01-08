const Note = ({ note, toggleImportant }) => {
    const label = note.important 
    ? 'Make not important'
    : 'Make important'

    return (
        <li>
            {note.content}
            <button onClick={toggleImportant}>{label}</button>
        </li>
    );
};
export default Note;