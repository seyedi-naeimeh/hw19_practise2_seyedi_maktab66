import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import MOdalForm from './ModalForm';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 1,
  
};

export default function ModalAdd() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div >
      <Button onClick={handleOpen} > <AddCircleIcon  sx={{color:"orange" , fontSize:"40px"}}/></Button>
      <Modal
    
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{fontSize:10 , textAlign:"center"}}>
          Create a New Skills
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 1 , fontSize:8 , textAlign:"center"}}>
          Please fill out the form below.
          </Typography>
          <MOdalForm />
        </Box>
      </Modal>
    </div>
  );
}
