import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import { useState } from 'react';
import ContactModal from './contact/ContactModal';

export default function FloatingActionButtonSize() {
  const [ contactBoxOpen, setContactBoxOpen] = useState(false);
  return (
    <Box sx={{  padding:1, position:"absolute", bottom:16  }}>
      
      <Fab size="medium" color="primary" aria-label="add">
        <Brightness2Icon onClick={()=>{setDark(!darkMode)}} />
      </Fab>
      <ContactModal></ContactModal>
    </Box>
  );
}