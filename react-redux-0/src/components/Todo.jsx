import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import { addTodo, deleteTodo } from "../redux/action";

export const Todo = () => {
    const todos = useSelector((store) => store.todos);
    const dispatch = useDispatch();
    const [value, setValue] = useState("");

    const handleAddTodo = () => {
        const payload = {
            id: uuid(),
            title: value,
            status: false
        }

        dispatch(addTodo(payload));
    }

    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    }

    return (
        <div>
            <input type="text" name="todo" id="todo" placeholder="add todo" onChange={(e) => setValue(e.target.value)} />
            <button onClick={handleAddTodo}>Add todo</button>
            {todos.map((todo) => {
                return <div key={todo.id}>
                    {todo.title}
                    <button key={todo.id} onClick={() => handleDelete(todo.id)}>remove</button>
                </div>
            })}
        </div>
    )
}
