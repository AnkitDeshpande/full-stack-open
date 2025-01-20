import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getTodos } from "../redux/action";

const Todo = () => {
    const API_URL = `http://localhost:3000/todos`;
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        if (text.trim() === "") {
            alert("Todo cannot be empty!");
            return;
        }

        const data = {
            id: Date.now(),
            title: text,
            completed: false,
        };

        axios.post(API_URL, data)
            .then(() => setText(""))
            .then(() => dispatch(getTodos()))

    };

    return (
        <div>
            <h1>Todo List</h1>
            <input
                type="text"
                value={text}
                placeholder="Add Todo"
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={handleAddTodo}>Add Todo</button>
        </div>
    );
};

export default Todo;
