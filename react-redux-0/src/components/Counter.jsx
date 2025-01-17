import { useDispatch, useSelector } from "react-redux";
import { addCount } from "../redux/action";

export const Counter = () => {
    const dispatch = useDispatch(); // you can use this or store method of store.dispatch()
    const counter = useSelector((store) => store.counter); //never return entire store it will have performance issue
    return (
        <div className='App'>
            <h1>{counter}</h1>
            <button onClick={() => dispatch(addCount(1))}>Add 1</button>
        </div>
    )
}
