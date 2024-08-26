function TodoItem({ todo, onChange, onDelet }) {
    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    checked={todo.isCompleted}
                    onChange={(e) => {
                        onChange({
                            ...todo,
                            isCompleted: e.target.checked
                        });
                    }}
                />
                {todo.text}
                <button onClick={() => onDelet(todo)}>X</button>
            </label>
        </div>
    );
}

export default TodoItem;