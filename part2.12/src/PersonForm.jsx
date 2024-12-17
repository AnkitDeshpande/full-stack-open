const PersonForm = ({ newName, readName, number, readNumber, addName }) => {
    return (
        <form>
            <div>
                name: <input value={newName} onChange={readName} />
                <div>number: <input value={number} onChange={readNumber} /></div>
            </div>
            <div>
                <button type="submit" onClick={addName}>add</button>
            </div>
        </form>
    )
}

export default PersonForm;