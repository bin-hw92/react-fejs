import { useCallback, useState } from "react";
import "../App.css";

const TodoInput = ({ onInsert, onRemoveAll }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(e => {
      if(value.trim() !== ''){
        onInsert(value);
        setValue('');
      }
      e.preventDefault();
  }, [onInsert, value]);

  const onClick = useCallback(e => {
    const eTarget = e.target;
    if(eTarget.tagName !== 'BUTTON') return;
    if(eTarget.id === 'todo-removeAll'){
      onRemoveAll([]);
      e.preventDefault();
    }
  },[]);

  return (
    <form className="todo-add" onSubmit={onSubmit}>
      <input
        type="text"
        id="todo-add-input"
        onChange={onChange}
        value={value}
      />
      <button id="todo-add-btn" type="submit">할 일 추가</button>
      <button id="todo-removeAll" type="submit" onClick={onClick}>전체 삭제</button>
    </form>
  );
};

export default TodoInput;
