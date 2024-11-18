const Part = ({ part, exercise }) => {
  console.log("part and excersise ->", part, exercise)
  return (
    <p>
      {part} {exercise}
    </p>
  );
}

export default Part;