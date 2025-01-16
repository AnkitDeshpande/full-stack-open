import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { addTodo } from "../redux/action";

export const TodoInput = () => {
   const [title, settitle] = useState("");
   const dispatch = useDispatch();

   const handleAdd = () => {
      const payload = {
         title,
         status: false,
         id: uuid()
      };
      dispatch(addTodo(payload));
   };

   return (
      <div>
         <h3>Add Todo</h3>
         <input
            value={title}
            placeholder="Add todo"
            onChange={(e) => settitle(e.target.value)}
         />
         <button onClick={handleAdd}>Add todo</button>
      </div>
   );
};
