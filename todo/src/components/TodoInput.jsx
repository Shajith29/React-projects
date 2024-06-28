import { useContext, useState } from "react";
import { GlobalContext } from "./Global";

export const TodoInput = () => {
    const { handleAddToDoList, todoValue, setTodoValue } =
        useContext(GlobalContext);
    return (
        <div className="input-container">
            <input
                value={todoValue}
                onChange={(e) => setTodoValue(e.target.value)}
                placeholder="Enter a TODO: "
                className="input"
            />
            <button
                onClick={() => {
                    handleAddToDoList(todoValue);
                    setTodoValue("");
                }}
                className="input-btn"
            >
                ADD TODO
            </button>
        </div>
    );
};
