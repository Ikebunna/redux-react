import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { openTaskAddModal } from "../features/modalSlice";

const AddTask = () => {
  const dispatch = useDispatch();
  const handleClickOpen = () => {
    dispatch(openTaskAddModal());
  };

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
    </div>
  );
};

export default AddTask;
