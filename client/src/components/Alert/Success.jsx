import React, {useContext} from 'react';
import { Alert, AlertTitle } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircle";
import {UserContext} from '../../ulti/UserContext'

export default function SuccessAlert()  {
  const {setAlert} = useContext(UserContext)
  return ( <Alert
      icon={<CheckCircleOutlineIcon style={{ color: "black", marginTop: "6px", fontWeight: "bold"}} />}
      onClose={() => setAlert(false)}
      style={{backgroundColor: '#04fab8f1',}}
    >
      <AlertTitle sx={{ fontWeight: "bold" }}>Success</AlertTitle>
      Your request was sent successfully
    </Alert>)
   
};