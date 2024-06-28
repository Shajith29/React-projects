import { useContext, useState } from "react";
import { GlobalContext } from "../components/Global";

export const TodoCard = ({ children, index }) => {
    const [isChecked, setIsChecked] = useState(false);
    const { handleEditList, handleRemoveList } = useContext(GlobalContext);

    return (
        <div>
            <li className="todolist-element">
                <div className="text">
                    <input
                        className="check-input"
                        type="checkbox"
                        onClick={() => setIsChecked(!isChecked)}
                        checked={isChecked ? true : false}
                        readOnly
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
                        <i className="fa-regular fa-pen-to-square"></i>
                    </button>
                    <button onClick={() => handleRemoveList(index)}>
                        <i className="fa-solid fa-trash"></i>
                    </button>
                </div>
            </li>
        </div>
    );
};
