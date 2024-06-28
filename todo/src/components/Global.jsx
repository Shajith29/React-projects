import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export const GlobalState = ({ children }) => {
    const [todoList, setTodoList] = useState([]);
    const [todoValue, setTodoValue] = useState("");

    const setToLocalStorage = (localList) => {
        localStorage.setItem("todos", JSON.stringify({ todos: localList }));
    };

    const handleAddToDoList = (newTodo) => {
        const newTodoList = [...todoList, newTodo];
        setTodoList(newTodoList);
        setToLocalStorage(newTodoList);
    };

    const handleRemoveList = (index) => {
        const newTodo = todoList.filter(
            (todo, todoIndex) => todoIndex !== index
        );

        setTodoList(newTodo);
        setToLocalStorage(newTodo);
    };

    const handleEditList = (index) => {
        const valueToBeEdited = todoList[index];
        setTodoValue(valueToBeEdited);
        handleRemoveList(index);
    };

    useState(() => {
        if (!localStorage) {
            return;
        }

        const locolTodos = localStorage.getItem("todos");

        if (!locolTodos) {
            return;
        }

        setTodoList(JSON.parse(locolTodos).todos);
    }, []);
    return (
        <GlobalContext.Provider
            value={{
                todoList,
                setTodoList,
                todoValue,
                setTodoValue,
                handleAddToDoList,
                handleRemoveList,
                handleEditList,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
