import { TodoCard } from "./TodoCard";

export const TodoList = ({ lists, handleRemoveList, handleEditList }) => {
    return (
        <ul className="todolist-container">
            {lists &&
                lists.map((list, listIndex) => (
                    <TodoCard
                        key={listIndex}
                        handleRemoveList={handleRemoveList}
                        index={listIndex}
                        handleEditList={handleEditList}
                    >
                        {list}
                    </TodoCard>
                ))}
        </ul>
    );
};
