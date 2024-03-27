import React, {useContext} from 'react';
import { Alert, AlertTitle } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircle";
import {UserContext} from '../../ulti/UserContext'
import 'animate.css'

export default function DangerAlert()  {
  const {SuccessAlert, FailAlert} = useContext(UserContext);
  return ( <Alert
      icon={<CheckCircleOutlineIcon style={{ color: "black", marginTop: "6px", fontWeight: "bold"}} />}
      onClose={() => FailAlert(false)}
      style={{backgroundColor: '#ce3832',}}
      id='danger-alert'
      className='animate__animated  animate__fadeInDown '
    >
      <AlertTitle sx={{ fontWeight: "bold" }}> Fail to send </AlertTitle>
      Please a valid email
    </Alert>)
   
};