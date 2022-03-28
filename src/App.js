import TodoInput from "./component/TodoInput";
import './App.css';
import { useCallback, useRef, useState } from "react";
import TodoList from "./component/TodoList";
import TodoCount from "./component/TodoCount";
import useLocalStorage from "./component/useLocalStorage";

const App = () => {
  const [todos, setTodos] = useLocalStorage('todo', []);
  const nextIdx = useRef(0);
  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextIdx.current,
        text,
        checked: false
      };
      setTodos(todos.concat(todo));
      nextIdx.current += 1;
    },[todos]
  );

  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !== id));
    },[todos]
  );

  const onChange = useCallback(
    id => {
      setTodos(todos.map(todo => {
        if(todo.id === parseInt(id)){
          todo.checked = todo.checked? false : true;
        }
        return todo;
      }));
    },[todos]
  );

  const onRemoveAll = useCallback(todo => setTodos(todo),[]);

  return (
    <div id="todo-list">
      <TodoList todos={todos} onRemove={onRemove} onChange={onChange}/>
      <TodoCount todos={todos} />
      <TodoInput onInsert={onInsert} onRemoveAll={onRemoveAll}/>
    </div>
  );
};

export default App;