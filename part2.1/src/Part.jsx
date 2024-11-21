const Part = ({ id, part, exercise }) => {
  return (
    <p key={id}>
      {part} {exercise}
    </p>
  );
}

export default Part;