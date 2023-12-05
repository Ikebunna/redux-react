import * as React from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars({
  openSnack,
  setOpenSnack,
  variant,
  msg,
}) {
  const handleClose = () => setOpenSnack(false);

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar open={openSnack} autoHideDuration={1000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={variant} sx={{ width: "100%" }}>
          {msg}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
