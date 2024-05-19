import { useState } from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import CancelIcon from "@mui/icons-material/Cancel";
import { useMutation } from "@apollo/client";

import './styles.css'
import dayjs from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import timeStampSmart from '../../ulti/timestamp'
dayjs.extend(LocalizedFormat)


export default function BlogCard({ name, date, text, url }) {
 


  return (
    <Card
      className="inbox-message flex-grow-1"
      sx={{ boxShadow: 5, borderRadius: 5, marginBottom: 2, backgroundColor: 'black' }}
    >
      <CardHeader
        className='message-title '
        avatar={<AccountCircleIcon></AccountCircleIcon>}
        action={
          <IconButton aria-label="link button" onClick={() => window.open(url, '_blank')}>
            <ArrowOutwardIcon />
          </IconButton>
        }
        title={
          <div style={{ fontFamily: 'Nunito Sans', fontWeight: 600 }}>
            <Typography fontSize={16} variant="inherit" style={{ fontWeight: 700 }}>{name}</Typography>
          </div>
        }
        subheader={
          <div>
            <Typography style={{ fontFamily: 'Nunito Sans' }} variant="inherit">{date}</Typography>
          </div>
        }
      />
      <CardContent className="inbox-card-text flex-grow-1">
        <Typography variant="p" style={{ fontFamily: 'Nunito Sans', fontWeight: 300 }}>
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
}
