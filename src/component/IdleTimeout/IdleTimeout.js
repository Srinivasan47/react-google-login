import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@mui/material';

function IdleTimeOut({ showModal, handleClose, handleLogout }) {
  return (
    <Dialog
      open={showModal}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">You Have Been Idle!</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Timed Out. You want to stay?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={handleClose}>
          Stay
        </Button>
        <Button variant="contained" onClick={handleLogout}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}
export default IdleTimeOut;
