import React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Typography } from "@mui/material";

const SingleTask = () => {
  const displayTask = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <FormControlLabel
        className="rounded-md p-2 shadow-md border-blue-950"
        control={
          <Checkbox
            sx={{
              "& .MuiSvgIcon-root": { fontSize: 36 },
            }}
          />
        }
        label={
          <a href="" onClick={displayTask}>
            <Typography variant="h6" color="textSecondary">
              Lorem ipsumr, adipisicing elit. Nobis vero doloremque,
            </Typography>
          </a>
        }
      />
    </>
  );
};

export default SingleTask;
