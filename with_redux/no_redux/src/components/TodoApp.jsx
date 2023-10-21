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
  // title
  const [message, setMessage] = useState('To Do App');
  // keeping track of what's inside input
  const [newTodo, setNewTodo] = useState('');
  // array of todos being updated
  const [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
    console.log('todos', todos);
  }, [todos]);

  // updates new todo inside state when input changes
  const newTodoChanged = (e) => setNewTodo(e.target.value);

  // create new todo and puts it in array
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

  // takes specific index of todo and change its done property to true
  const toggleTodoDone = (e, index) => {
    const todosArr = [...todos]; // copy the array
    todosArr[index] = {
      ...todosArr[index],
      done: e.target.checked, // update done property on copied todo
    }; // copy the todo can also use Object.assign
    setTodos(todosArr); // update the todos state
  };

  // removes todo from array
  const removeTodo = (index) => {
    const todosArr = [...todos]; // copy the array
    todosArr.splice(index, 1);

    setTodos(todosArr);
  };

  // goes over every single todo and changes done property to true
  const allDone = () => {
    const todosArr = todos.map((todo) => {
      return {
        title: todo.title, // can also do ...todo
        done: true,
      };
    });

    setTodos(todosArr);
  };

  // form we are passing state of input down to
  // one fn called when form is submitted and another called when input changes
  // ToDoList passes down arr of todos and two functions
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
