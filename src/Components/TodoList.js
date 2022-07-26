import { connect } from "react-redux";
import { deleteTodo } from "../Store/Actions";

const TodoList = ({ todos, deleteTodo,setTodoIndex }) => {
  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} onClick={() =>{setTodoIndex(index)}}>
            {todo.name} - {todo.description}
            <button
              onClick={() => {
                deleteTodo(index);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default connect(
  (state) => {
    return {
      todos: state,
    };
  },
  { deleteTodo }
)(TodoList);
