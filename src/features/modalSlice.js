import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  taskDisplayModalIsOpen: false,
  taskAddModalIsOpen: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    closeModal: (state) => {
      state.taskDisplayModalIsOpen = false;
      state.taskAddModalIsOpen = false;
    },
    openTaskDisplayModal: (state) => {
      state.taskDisplayModalIsOpen = true;
    },
    openTaskAddModal: (state) => {
      state.taskAddModalIsOpen = true;
    },
  },
});

// exports needed by store
export const { closeModal, openTaskDisplayModal, openTaskAddModal } =
  modalSlice.actions;
export default modalSlice.reducer;
