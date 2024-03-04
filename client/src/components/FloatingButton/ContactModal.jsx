import  React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import {useState} from 'react'; 
import MessageForm from '../contact/Form'
import useProvider from '../../ulti/UserContext'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: {xs:'90%',sm:'60%',lg:'30%'},
  height : '80%',
  transform: 'translate(-50%, -50%) scale(1)',
  bgcolor: '#0e0e0ec4',
  border: '2px solid #000',
  boxShadow: 24,
  borderRadius:3,
  pt: 2,
  px: 4,
  pb: 3,



  transition: 'transform 0.3s ease-in-out', // Adding transition for a smooth effect
  '&:hover': {
    transform: 'translate(-50%, -50%) scale(1.05)'}
};

export default function ContactModal({open, setClose}) {

  return (
    <React.Fragment>
      <Button >Contact</Button>
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
