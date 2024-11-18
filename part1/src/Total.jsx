const Total = ({ parts }) => {
    console.log(parts);
    const total = parts.reduce((x, y) => parseInt(x) + parseInt(y.exercises), 0);
    return (
        <p>Number of exercises {total}</p>
    );
}

export default Total;