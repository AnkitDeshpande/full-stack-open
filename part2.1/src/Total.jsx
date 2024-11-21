const Total = ({ parts }) => {
    console.log(parts);
    const total = parts.reduce((x, y) => x + y.exercises, 0);
    return (
        <p><b>total of {total} excersices</b></p>
    );
}

export default Total;