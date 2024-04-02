import  React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import {useState} from 'react'; 
import MessageForm from '../contact/Form'

import 'animate.css'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: {xs:'90%',sm:'80%',lg:'60%', xl:'30%'},
  height:'fit-content',
  transform: 'translate(-50%, -50%) scale(1)',
  border: '2px solid #67dda0',
  boxShadow: 24,
  borderRadius:9,
  pt: 2,
  px: 0,
  pb: 3,





  transition: 'transform 0.3s ease-in-out', // Adding transition for a smooth effect
  '&:hover': {
    transform: 'translate(-50%, -50%) scale(1.02)'}
};

export default function ContactModal({open, setClose}) {

  return (
    <React.Fragment>
      <Button className='animate__animated  animate__fadeOutLeft animate__delay-5s' >  Contact </Button>
      <Modal
        open={open}
        onClose={()=> setClose(!open)}
      >
        <Box className='QuickContact' sx={{ ...style}}>
          <MessageForm openModal={setClose}></MessageForm>
        </Box>
      </Modal>
    </React.Fragment>
  );
}
