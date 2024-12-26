import axios from 'axios';

const Persons = ({ persons, filterTerm, handleDelete }) => {
    return (<div>
        {persons
            .filter((ele) => filterTerm.length !== 0
                ? ele.name.toLowerCase().includes(filterTerm.toLowerCase())
                : ele)
            .map(per => {
                return (
                    <div>
                        <p key={per.id}>{per.name} : {per.number}
                            <button key={per.id} onClick={() => handleDelete(per.id)}>delete</button>
                        </p>
                    </div>
                )
            })
        }
    </div>
    );
}

export default Persons;