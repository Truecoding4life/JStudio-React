import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState, useEffect } from 'react';
import ContactModal from './ContactModal';
import 'animate.css'
import { IconButton } from '@mui/material';
import CallMadeIcon from '@mui/icons-material/CallMade';
import './style.css'


export default function FloatingButton() {
  const [contactBoxOpen, setContactBoxOpen] = useState(false);
  useEffect(() => {
function hideFloatButton() {
  const floatButton = document.getElementById('float-button-to-listen');
  setTimeout(() => {
    floatButton.classList.remove('animate__bounceInUp');
    floatButton.classList.add('animate__bounce');
  }, 10 * 1000)

  setTimeout(() => {
    floatButton.classList.remove('animate__bounce');
    floatButton.classList.add('animate__bounceOutDown');
  }, 120 * 1000)
};


    hideFloatButton();
  }, []);

  return (
    <Box className='' sx={{ padding: 1, position: 'fixed', bottom: 120, left: 16, zIndex: 1000 }} id='float-button'>
      <IconButton onClick={() => { setContactBoxOpen(true) }}>

        <h5 id='float-button-to-listen' className="text-white float-button animate__animated  animate__bounceInUp"> Let's chat <i><CallMadeIcon></CallMadeIcon></i></h5>
      </IconButton>
      <ContactModal open={contactBoxOpen} setClose={setContactBoxOpen}></ContactModal>

    </Box>
  );
}