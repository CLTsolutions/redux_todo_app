import React, { useEffect, useState } from 'react';
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';

const initialTodos = [
  {
    title: 'Learn React',
    done: false,
  },
  {
    title: 'Learn JSX',
    done: false,
  },
];

const TodoApp = () => {
  const [message, setMessage] = useState('To Do App');
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
    console.log('todos', todos);
  }, [todos]);

  const newTodoChanged = (e) => setNewTodo(e.target.value);

  const formSubmitted = (e) => {
    e.preventDefault();

    setTodos([
      {
        title: newTodo,
        done: false,
      },
      ...todos,
    ]);

    setNewTodo('');
  };

  const toggleTodoDone = (e, index) => {
    const todosArr = [...todos]; // copy the array
    todosArr[index] = {
      ...todosArr[index],
      done: e.target.checked, // update done property on copied todo
    }; // copy the todo can also use Object.assign
    setTodos(todosArr); // update the todos state
  };

  const removeTodo = (index) => {
    const todosArr = [...todos]; // copy the array
    todosArr.splice(index, 1);

    setTodos(todosArr);
  };

  const allDone = () => {
    const todosArr = todos.map((todo) => {
      return {
        title: todo.title, // can also do ...todo
        done: true,
      };
    });

    setTodos(todosArr);
  };

  return (
    <div className='App'>
      <h3>{message}</h3>
      <NewTodoForm
        newTodo={newTodo}
        formSubmitted={formSubmitted}
        newTodoChanged={newTodoChanged}
      />
      <button onClick={allDone}>All Done</button>
      <TodoList todos={todos} toggleTodoDone={toggleTodoDone} removeTodo={removeTodo} />
    </div>
  );
};

export default TodoApp;
