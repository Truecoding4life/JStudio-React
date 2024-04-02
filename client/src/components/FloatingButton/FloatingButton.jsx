import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from 'react';
import ContactModal from './ContactModal';
import 'animate.css'
import { IconButton } from '@mui/material';
import CallMadeIcon from '@mui/icons-material/CallMade';
import './style.css'
export default function FloatingButton() {
  const [ contactBoxOpen, setContactBoxOpen] = useState(false);
  return (
    <Box className='animate__animated  animate__bounceInUp animate__delay-2s' sx={{  padding:1, position: 'fixed', bottom: 120, left: 16, zIndex: 1000 }} id='float-button'>
      <IconButton onClick={()=>{ setContactBoxOpen(true)}}>

      <h5 className="text-white float-button"> Let's chat <i><CallMadeIcon></CallMadeIcon></i></h5> 
      </IconButton>
      <ContactModal open={contactBoxOpen} setClose={setContactBoxOpen}></ContactModal>
    </Box>
  );
}