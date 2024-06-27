import { useState } from "react";

export const TodoInput = ({ handleAddToDoList, todoValue, setTodoValue }) => {
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
