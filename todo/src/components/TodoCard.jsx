import { useState } from "react";

export const TodoCard = ({
    children,
    index,
    handleRemoveList,
    handleEditList,
}) => {
    const [isChecked, setIsChecked] = useState(false);
    return (
        <div>
            <li className="todolist-element">
                <div className="text">
                    <input
                        className="check-input"
                        type="checkbox"
                        onClick={() => setIsChecked(!isChecked)}
                        checked={isChecked ? true : false}
                    />
                    <label className="check"></label>

                    {
                        <p
                            style={{
                                textDecoration: isChecked
                                    ? "line-through"
                                    : "none",
                            }}
                        >
                            {children}
                        </p>
                    }
                </div>

                <div className="icon-container">
                    <button onClick={() => handleEditList(index)}>
                        <i class="fa-regular fa-pen-to-square"></i>
                    </button>
                    <button onClick={() => handleRemoveList(index)}>
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            </li>
        </div>
    );
};
