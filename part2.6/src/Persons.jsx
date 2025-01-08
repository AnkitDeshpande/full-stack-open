const Persons = ({ persons, filterTerm }) => {
    return (<div>
        {persons
        .filter((ele) => filterTerm.length !== 0 
        ? ele.name.toLowerCase().includes(filterTerm.toLowerCase()) 
        : ele)
        .map(per => {
            return (
                <p key={per.id}>{per.name} : {per.number}</p>
            )
        })
        }
    </div>
    );
}

export default Persons;