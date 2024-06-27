import { useEffect, useState } from "react";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/Todolist";

function App() {
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

    useEffect(() => {
        if (!localStorage) {
            return;
        }

        let localTodos = localStorage.getItem("todos");

        if (!localTodos) {
            return;
        }

        setTodoList(JSON.parse(localTodos).todos);
    }, [todoList]);

    return (
        <>
            <TodoInput
                handleAddToDoList={handleAddToDoList}
                todoValue={todoValue}
                setTodoValue={setTodoValue}
            />
            <TodoList
                lists={todoList}
                handleRemoveList={handleRemoveList}
                handleEditList={handleEditList}
            />
        </>
    );
}

export default App;
