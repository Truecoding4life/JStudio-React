import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import './style.css'

export default function MoreDetail({description}) {
  return (
    <div>
      <Accordion className='detail-project card-text ' style={{backgroundColor:'transparent', borderRadius:10}} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:'var(--more-detail-tab)'}}/>}
          aria-controls="panel1-content"
        
          
        >
          <h5 className='more-detail'> More about this project  </h5>
        </AccordionSummary>
        <AccordionDetails className='detail'>
          {description}
        </AccordionDetails>
      </Accordion>
     
    </div>
  );
}