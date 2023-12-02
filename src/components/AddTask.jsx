import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@mui/material";
import TaskModal from "./TaskModal";
import { useDispatch } from "react-redux";
import { openModal } from "../features/modal/modalSlice";

const AddTask = () => {
  const dispatch = useDispatch();
  const handleClickOpen = () => dispatch(openModal());

  // setOpen(true);

  return (
    <div className="bottom-0 sticky w-full bg-pink-300 text-center">
      <Button
        fullWidth
        className="space-x-8"
        variant="contained"
        onClick={handleClickOpen}
      >
        <FontAwesomeIcon icon={faPlus} size="3x" />
        <span>Add New Task</span>
      </Button>
      <TaskModal title={"Add New Task"} id={1} />
    </div>
  );
};

export default AddTask;
