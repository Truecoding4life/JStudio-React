import React, {useContext} from 'react';
import { Alert, AlertTitle } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircle";
import {UserContext} from '../../ulti/UserContext'
import 'animate.css'

export default function SuccessAlert()  {
  const {SuccessAlert, FailAlert} = useContext(UserContext)
  FailAlert(false);
  return ( <Alert
      icon={<CheckCircleOutlineIcon style={{ color: "black", marginTop: "6px", fontWeight: "bold"}} />}
      onClose={() => SuccessAlert(false)}
      style={{backgroundColor: '#04fab8f1',}}
      id='success-alert'
      className='animate__animated  animate__fadeInDown '
    >
      <AlertTitle sx={{ fontWeight: "bold" }}>Success</AlertTitle>
      Your request was sent successfully
    </Alert>)
   
};