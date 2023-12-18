import { createSlice, nanoid } from "@reduxjs/toolkit";

//nanoid generate unique id

const initialState = {
  todos: [{ id: 1, text: "Hello World !!" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

// export all functionality
export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer