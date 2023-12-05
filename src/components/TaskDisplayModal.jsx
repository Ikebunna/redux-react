import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../features/modalSlice";
import { captureInput } from "../features/taskInputSlice";

const TaskModal = () => {
  const dispatch = useDispatch();
  const { taskDisplayModalIsOpen } = useSelector((state) => state.modal);
  const handleClose = () => dispatch(closeModal());

  // function to handle input
  const handleInput = (e) => {
    const task = e.target.value;
    dispatch(captureInput(task));
  };

  // dispatch from user input

  return (
    <div>
      <Dialog open={taskDisplayModalIsOpen} onClose={handleClose} fullWidth>
        <DialogTitle>Viewing Task</DialogTitle>
        <DialogContent>
          <DialogContentText>
            task clicked will be displayed here
          </DialogContentText>
          {/* <InputField type="text" handleInput={handleInput} /> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Edit Task</Button>
          <Button onClick={handleClose} color="success">
            Mark as Completed
          </Button>
          <Button onClick={handleClose} color="error">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TaskModal;
