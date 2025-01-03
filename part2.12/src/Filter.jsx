const Filter = ({ filterTerm, filter }) => {
    return (
        <div>
            <input value={filterTerm} onChange={filter} />
        </div>
    );
}
export default Filter;