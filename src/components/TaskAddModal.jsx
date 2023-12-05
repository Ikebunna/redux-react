import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../features/modalSlice";
import InputField from "./InputField";
import { addTask } from "../features/pendingTaskSlice";
import CustomizedSnackbars from "./SnackBar";
import { fail, succeed } from "../features/snackBarSlice";

const TaskModal = () => {
  const dispatch = useDispatch();

  const { taskAddModalIsOpen } = useSelector((state) => state.modal);
  const handleClose = () => dispatch(closeModal());

  const [value, setValue] = useState("");
  const handleInput = (e) => setValue(e.target.value);

  // dispatch from user input
  const handleSubmit = () => {
    if (value.trim()) {
      dispatch(addTask(value.trim()));
      dispatch(succeed());
    } else {
      dispatch(fail());
    }
    setValue("");
  };

  return (
    <div>
      <Dialog open={taskAddModalIsOpen} onClose={handleClose} fullWidth>
        <DialogTitle>Add Task</DialogTitle>
        <DialogContent>
          <InputField type="text" handleInput={handleInput} value={value} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit}>Add Task</Button>

          <Button onClick={handleClose} color="error">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TaskModal;
