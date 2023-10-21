// presentational component (pure functional component)

const NewTodoForm = ({ formSubmitted, newTodoChanged, newTodo }) => {
  return (
    <form onSubmit={formSubmitted}>
      <label htmlFor='newTodo'>New Todo</label>
      <input onChange={newTodoChanged} id='newTodo' name='newTodo' value={newTodo} />
      <button type='submit'>Add Todo</button>
    </form>
  );
};

export default NewTodoForm;
