import { createSlice } from "@reduxjs/toolkit";

const initialState = { severity: "success", msg: "successful", isOpen: "true" };

export const snackBar = createSlice({
  name: "variants",
  initialState,
  reducers: {
    fail: (state) => {
      state.severity = "error";
      state.msg = "unsuccessful";
      state.isOpen = true;
    },
    succeed: (state) => {
      state.variants.severity = "success";
      state.variants.msg = "successful";
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
  },
});

// exports needed by store
export const { fail, succeed, close } = snackBar.actions;
export default snackBar.reducer;
