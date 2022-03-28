import { useCallback } from "react";

const TodoList = ({todos, onRemove, onChange}) => {

    const onClick = useCallback(e => {
        if(e.target.tagName === 'BUTTON') return;
        onChange(e.target.dataset.idx);
    }, [todos]);

    return (
        <div className="todo-list">
            <ul>
            {todos.map(todo => (
                <li data-idx={todo.id} key={todo.id} onClick={onClick}>
                    {todo.checked? <s>{todo.text}</s> : todo.text}
                    <button data-idx={todo.id} key={todo.id} onClick={() => onRemove(todo.id)}>삭제</button>
                </li>
            ))
            }
            </ul>
        </div>
    )
}

export default TodoList;