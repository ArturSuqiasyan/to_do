import { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import TodoFooter from './TodoFooter';
import "./App.Css";

function App() {
  const [todos, setTodos] = useState([
    {
      id: Math.random(),
      text: "learn Html",
      isCompleted: false,
    },
    {
      id: Math.random(),
      text: "learn css",
      isCompleted: false,
    },
    {
      id: Math.random(),
      text: "learn js",
      isCompleted: false,
    },
  ]);

  return (
    <div className='App'>
      <TodoForm onAdd={(text) => {
setTodos([...todos,
  {
    id: Math.random(),
    text: text,
    isCompleted: false,
  }

])
       } }/>
      <TodoList todos={todos}
      onDelet={(todo) => {
        setTodos(todos.filter((t) => t.id !== todo.id));
      }}
      onChange={(newTodo)=>{
        setTodos(todos.map((todo) => {
          if(todo.id === newTodo.id) {
            return newTodo;
          }
          return todo;
        }));

      }}
      />
      <TodoFooter todos={todos} onClearComplet={()=> {
        setTodos(todos.filter((todo) => !todo.isCompleted));
      }

      } />
  
    </div>
  );
}

export default App;

