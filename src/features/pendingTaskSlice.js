import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [];

export const pendingTasks = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => [
      { id: nanoid(), description: action.payload, isDone: false },
      ...state,
    ],

    updateTaskStatus: (state, action) => {
      state = state.map((item) => {
        if (item.id === action.payload) {
          item.isDone = !item.isDone;
        }
      });
    },
  },
});

// exports needed by store
export const { addTask, updateTaskStatus } = pendingTasks.actions;
export default pendingTasks.reducer;
