import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from 'react';
import ContactModal from './contact/ContactModal';

export default function FloatingActionButtonSize() {
  const [ contactBoxOpen, setContactBoxOpen] = useState(false);
  return (
    <Box sx={{  padding:1, position:"absolute", bottom:16  }}>
      
      <Fab size="medium" color="primary" aria-label="add">
        <AccountCircleIcon onClick={()=>{setContactBoxOpen(!contactBoxOpen)}} />
      </Fab>
      <ContactModal open={contactBoxOpen} setClose={setContactBoxOpen}></ContactModal>
    </Box>
  );
}