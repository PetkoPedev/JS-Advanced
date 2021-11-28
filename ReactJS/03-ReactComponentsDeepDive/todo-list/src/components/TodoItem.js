import { useEffect } from "react";
import styles from './TodoItem.module.css';

export default function TodoItem({
    id,
    todo,
    onDelete,
    onClick
}){
    useEffect(() => {
        console.log(`${id} - Mounted`);

        return () => {
            console.log(`${id} - Unmount`);
        }
    }, [id]);
    return (
        <li onClick={() => onClick(todo.id)} className={styles['todo-item']}>
            {todo.text} 
            <button onClick={() => onDelete(todo.id)}>X</button>
        </li>
    );
}