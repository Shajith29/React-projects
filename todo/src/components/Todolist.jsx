import { useContext } from "react";
import { TodoCard } from "./TodoCard";
import { GlobalContext } from "./Global";

export const TodoList = () => {
    const { todoList, handleRemoveList, handleEditList } =
        useContext(GlobalContext);
    return (
        <ul className="todolist-container">
            {todoList &&
                todoList.map((list, listIndex) => (
                    <TodoCard key={listIndex} index={listIndex}>
                        {list}
                    </TodoCard>
                ))}
        </ul>
    );
};
