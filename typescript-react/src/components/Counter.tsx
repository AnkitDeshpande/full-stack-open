import { useState } from "react";

type CounterProps = {
    init?: number;
    children?: JSX.Element;
}

const Counter = ({ init = 5, children }: CounterProps) => {
    const [counter, setCounter] = useState(init);
    return (
        <div>
            <div>Counter:{counter}</div>
            {children}
            <button onClick={() => setCounter(counter + 1)}> Add 1</button>
        </div>
    )
}

export default Counter;