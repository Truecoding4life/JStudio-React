import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Brightness2Icon from '@mui/icons-material/Brightness2';
export default function FloatingActionButtonSize({setDark, darkMode}) {
  return (
    <Box sx={{  padding:1, position:"absolute", bottom:16  }}>
      
      <Fab size="medium" color="primary" aria-label="add">
        <Brightness2Icon onClick={()=>{setDark(!darkMode)}} />
      </Fab>
      
    </Box>
  );
}