import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { v4 } from "uuid";

type Todo = {
    id: string;
    title: string;
    status: boolean;
}

export const Todos = () => {
    const [text, setText] = useState("");
    const [todos, setTodos] = useState<Todo[]>([]);

    const getTodos = () => {
        axios.get(`http://localhost:3000/todos`)
            .then(({ data }: AxiosResponse<Todo[]>) => {
                console.log(data)
                setTodos(data);
            })
    }

    useEffect(() => {
        getTodos();
    }, []);

    return (
        <div>
            <input type="text" value={text} onChange={(event) => setText(event.target.value)} />
            <button onClick={() => {
                const payload = {
                    "id": v4(),
                    "title": text,
                    "status": false,
                }
                axios.post("http://localhost:3000/todos", payload)
                    .then(getTodos)
                setTodos([...todos, payload])
                setText("")
            }}>Add todo</button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.title} - {todo.status ? "Done" : "Complete"}</li> // Simplified JSX
                ))}
            </ul>
        </div >
    )
}
