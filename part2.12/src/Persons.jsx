import axios from 'axios';

const Persons = ({ persons, filterTerm }) => {
    const handleDelete = (id) => {
        if (confirm("Do you wanna delete this person?")) {
            axios.delete(`http://localhost:3001/persons/${id}`);
            console.log('deleted');
        }
    }

    return (<div>
        {persons
            .filter((ele) => filterTerm.length !== 0
                ? ele.name.toLowerCase().includes(filterTerm.toLowerCase())
                : ele)
            .map(per => {
                return (
                    <div>
                        <p key={per.id}>{per.name} : {per.number}</p>
                        <button key={per.id} onClick={() => handleDelete(per.id)}>delete</button>
                    </div>
                )
            })
        }
    </div>
    );
}

export default Persons;