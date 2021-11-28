import { useState, useEffect } from 'react';
import uniqid from 'uniqid';
import TodoItem from "./TodoItem";

const API_URL = 'http://localhost:3030/jsonstore';

export default function TodoList() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch(`${API_URL}/todos`)
            .then(res => res.json())
            .then(todosResult => {
                setTodos(Object.values(todosResult));
            });
    }, []);

    const onTodoInputBlur = (e) => {
        let todo = {
            id: uniqid(),
            text: e.target.value,
            isDone: false,
        };

        setTodos(state => [
            ...state,
            todo
        ]);
    };

    const deleteTodoItemClickHandler = (id) => {
        setTodos(todo => todo.filter(x => x.id !== id));
    };

    const toggleTodoItemClickHandler = (id) => {
        setTodos(oldTodos => {
            let selectedTodo = oldTodos.find(x => x.id === id);
            let selectedIndex = oldTodos.findIndex(x => x.id === id);
            let toggledTodo = { ...selectedTodo, isDone: !selectedTodo.isDone };

            return [
                ...oldTodos.slice(0, selectedIndex),
                toggledTodo,
                ...oldTodos.slice(selectedIndex + 1),
            ];
        });
    };

    return (
        <>
            <label htmlFor="todo-name">Add Todo</label>
            <input type="text" id="todo-name" onBlur={onTodoInputBlur} name="todo" />
            <ul>
                {todos.map(todo =>
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onDelete={deleteTodoItemClickHandler}
                        onClick={toggleTodoItemClickHandler}
                    />
                )}
            </ul>
        </>
    );
}