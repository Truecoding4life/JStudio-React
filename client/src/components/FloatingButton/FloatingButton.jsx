import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from 'react';
import ContactModal from './ContactModal';
import 'animate.css'

export default function FloatingButton() {
  const [ contactBoxOpen, setContactBoxOpen] = useState(false);
  return (
    <Box className='animate__animated  animate__bounceInUp animate__delay-2s' sx={{  padding:1, position: 'fixed', bottom: 200, left: 16, zIndex: 1000 }} id='float-button'>
      
      <Fab size="small" color="primary" aria-label="add" >
        <AccountCircleIcon onClick={()=>{setContactBoxOpen(!contactBoxOpen)}} />
      </Fab>
      <ContactModal open={contactBoxOpen} setClose={setContactBoxOpen}></ContactModal>
    </Box>
  );
}