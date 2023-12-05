import { TextField } from "@mui/material";
import React from "react";

const InputField = ({ handleInput, value }) => {
  return (
    <TextField
      autoFocus
      margin="dense"
      id="name"
      label="New Task"
      type="text"
      fullWidth
      variant="standard"
      onChange={handleInput}
      value={value}
    />
  );
};

export default InputField;
