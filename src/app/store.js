import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "../features/modalSlice";
import pendingTasksReducer from "../features/pendingTaskSlice";
import taskInputReducer from "../features/taskInputSlice";
import snackBarReducer from "../features/snackBarSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    tasks: pendingTasksReducer,
    taskInput: taskInputReducer,
    variants: snackBarReducer,
    // will contain list of reducers
  },
});
