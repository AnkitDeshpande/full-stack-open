import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";

const TodoList = () => {
    const API_URL = `http://localhost:3000/todos`;
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const navigate = useNavigate();
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

    const handleOnClickView = (id) => {
        navigate(`/todo/:${id}`)
    }

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <div>
            <h1>Todo List</h1>
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
