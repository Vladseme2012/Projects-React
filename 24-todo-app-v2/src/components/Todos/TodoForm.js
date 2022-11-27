import { useState } from 'react';
import styles from './TodoForm.module.css';
import Button from '../UI/Button';
function TodoForm({ addTodo }) {
  const [text, setText] = useState('');
  const changeTextInput = (e) => {
    setText(e.target.value);
  };
  const addHandlerText = (event) => {
    event.preventDefault();
    addTodo(text);
    setText('');
  };
  console.log(text);

  return (
    <div className={styles.TodoFormContainer}>
      <form onSubmit={addHandlerText}>
        <input
          value={text}
          onChange={changeTextInput}
          type="text"
          placeholder="Enter new todo"
        />
        <Button type="submit" title='Submit'>Submit</Button>
      </form>
    </div>
  );
}

export default TodoForm;
