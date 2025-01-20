import { useState } from "react";
import { v4 } from "uuid";

type Todo = {
    id: string;
    title: String;
    status: boolean;
}

export const Todos = () => {
    const [text, setText] = useState("");
    const [todos, setTodos] = useState<Todo[]>([]);
    return (
        <div>
            <input type="text" value={text} onChange={(event) => setText(event.target.value)} />
            <button onClick={() => {
                const payload = {
                    "id": v4(),
                    "title": text,
                    "status": false,
                }
                setTodos([...todos, payload])
                setText("")
            }}>Add todo</button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.title}</li> // Simplified JSX
                ))}
            </ul>
        </div >
    )
}
