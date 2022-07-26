import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

import { useState } from "react";

const TodoMain = (props) => {
  const [todoIndex, setTodoIndex] = useState();
  const updateTodo=(index)=>{
    setTodoIndex(index)
  }

//   console.log(todoIndex);
  return (
    <>
      <div>
        <div className="row">
          <div className="col-xs-3" >
            <TodoForm todoUpdateIndex={todoIndex}/>
          </div>
          <div className="col-xs-6" >
            <TodoList setTodoIndex={updateTodo}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoMain;
