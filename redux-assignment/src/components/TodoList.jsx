import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { getTodos, sortTodos } from "../redux/action";

const TodoList = () => {
    const API_URL = `http://localhost:3000/todos`;
    const todos = useSelector((state) => state.todos.todos);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [sortOption, setSortOption] = useState('title');
    const fetchTodos = async () => {
        try {
            const { data } = await axios.get(API_URL);
            console.log("Fetched Todos:", data);
            dispatch({ type: "SET_TODOS", payload: data });
        } catch (error) {
            console.error("Error fetching todos:", error);
        }
    };

    const toggleStatus = async (id, currentStatus) => {
        const updatedTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !currentStatus } : todo
        );
        dispatch({ type: "SET_TODOS", payload: updatedTodos });

        try {
            await axios.patch(`${API_URL}/${id}`, { completed: !currentStatus });
        } catch (error) {
            console.error("Error toggling todo status:", error);
            fetchTodos();
        }
    };

    const handleDeleteTodo = async (id) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        dispatch({ type: "SET_TODOS", payload: updatedTodos });

        try {
            await axios.delete(`${API_URL}/${id}`);
        } catch (error) {
            console.error("Error deleting todo:", error);
            fetchTodos();
        }
    };

    const handleSortChange = (event) => {
        dispatch(sortTodos(event.target.value))
    };

    // const handleOnClickView = (id) => {
    //     navigate(`/todo/:${id}`)
    // }

    useEffect(() => {
        dispatch(getTodos())
    }, []);

    return (
        <div>
            <h1>Todo List</h1>
            <select value={sortOption} onChange={handleSortChange}>
                <option value="id">Sort by id</option>
                <option value="title">Sort by Title</option>
                <option value="completed">Sort by Completion Status</option>
                <option value="date">Sort by Date</option>
            </select>
            <table border="1">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo) => (
                        <tr key={todo.id}>
                            <td>{todo.title}</td>
                            <td>{todo.completed ? "Completed" : "Incomplete"}</td>
                            <td>
                                <button onClick={() => toggleStatus(todo.id, todo.completed)}>
                                    {todo.completed ? "Mark as Incomplete" : "Mark as Complete"}
                                </button>
                                <button onClick={() => handleDeleteTodo(todo.id)}>Delete todo</button>
                                <Link to={`/todo/${todo.id}`}><button>view todo</button></Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

};

export default TodoList;
