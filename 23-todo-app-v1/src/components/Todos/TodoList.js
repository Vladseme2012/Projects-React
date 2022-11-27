import Todo from './Todo';
import styles from './TodoList.module.css';

function TodoList({ todos, deleteTodo }) {
  return (
    <div className={styles.todoListContainer}>
      {!todos.length && <h2>Todo List is empty</h2>}
      {todos.map((todo, index) => {
        return (
          <Todo todo={todo} key={index} index={index} deleteTodo={deleteTodo} />
        );
      })}
    </div>
  );
}

export default TodoList;
