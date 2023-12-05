import React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { openTaskDisplayModal } from "../features/modalSlice";
import { updateTaskStatus } from "../features/pendingTaskSlice";

const SingleTask = ({ description, isDone, id }) => {
  const dispatch = useDispatch();

  const displayTask = (e) => {
    e.preventDefault();
    dispatch(openTaskDisplayModal());
  };

  const handleCheck = () => {
    dispatch(updateTaskStatus(id));
  };

  return (
    <>
      <div className="rounded-md p-2 shadow-md border-blue-950">
        <FormControlLabel
          control={
            <Checkbox
              sx={{
                "& .MuiSvgIcon-root": { fontSize: 36 },
                padding: 0,
              }}
              onChange={handleCheck}
              checked={isDone}
            />
          }
          label={
            <a href="" onClick={displayTask}>
              <Typography variant="h6" color="textSecondary">
                {description}
              </Typography>
            </a>
          }
        />
      </div>
    </>
  );
};

export default SingleTask;
