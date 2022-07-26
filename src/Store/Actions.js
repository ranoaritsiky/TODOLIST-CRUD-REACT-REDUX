export const todoInitialState = [
  
  
];

export const ADD_TODO = "add todo";
export const DELETE_TODO = "delete todo";
// export const UPDATE_TODO="update todo"

export const add_todo = (todo) => {
  return {
    type: ADD_TODO,
    todo,
  };
};

export const deleteTodo = (index) => {
  return {
    type: DELETE_TODO,
    index,
  };
};
