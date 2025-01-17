import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const TodoDetails = () => {
  const { id } = useParams();
  const API_URL = `http://localhost:3000/todos`;
  const [todoToShow, setTodoToShow] = useState({});

  useEffect(() => {
    axios.get(`${API_URL}/${id}`)
      .then(({ data }) => setTodoToShow(data));
  }, [])

  return (
    <div>
      <h1>Todo Details</h1>
      <p><strong>Title:</strong> {todoToShow.title}</p>
      <p><strong>Status:</strong> {todoToShow.completed ? "Completed" : "Incomplete"}</p>
    </div>
  );

}

export default TodoDetails