import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    closeModal: (state) => {
      state.open = false;
    },
    openModal: (state, action) => {
      // state.open[action.payload.id] = action.payload.open;
      state.open = true;
    },
  },
});

// exports needed by store
export const { closeModal, openModal } = modalSlice.actions;
export default modalSlice.reducer;
