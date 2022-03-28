

const TodoCount = ({todos}) => {
    const totalcount = todos.length;
    const completecount = todos.filter(todo => todo.checked === true).length;
    return (
        <div className="todo-count">
            <span>총 개수: {totalcount} | 완료 개수 {completecount}</span>
        </div>
    );
};

export default TodoCount;