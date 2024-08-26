import TodoItem from "./TodoItem";
function TodoList({todos, onChange, onDelet}) {
    return (
      <div>
        {
        todos.map((todo) => {
          return (
           <TodoItem key={todo.id} todo={todo}
           onChange={onChange}
           onDelet={onDelet}
           />
          );
        })}
      </div>
    );
  }
  export default TodoList