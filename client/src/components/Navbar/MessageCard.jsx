import { useState } from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { useMutation } from "@apollo/client";
import { REMOVE_MESSAGE } from "../../ulti/mutations";
import { ALL_MESSAGE } from "../../ulti/queries";
import './styles.css'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import timeStampSmart from '../../ulti/timestamp'
dayjs.extend(LocalizedFormat)


export default function RecipeReviewCard({ name, date, text, id, email }) {
  const [removeMessage] = useMutation(REMOVE_MESSAGE, {
    refetchQueries: [ALL_MESSAGE, "messages"],
  });
  date = date.trim();
  const dateLocal = dayjs().locale('en')
  const isoData = dateLocal.toISOString()
  const currentFullDate = dayjs( isoData).format('LLL').split(' ');

  const handleRemove = async () => {
    try {

      const { data } = await removeMessage({
        variables: {
          userId: "65bf4ca7da66cd1e791b259d",
          messageId: id,
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Card

      key={id}
      className="inbox-message flex-grow-1"
      sx={{ boxShadow: 5, borderRadius: 5, marginBottom: 2, backgroundColor: 'black' }}
    >
      <CardHeader
        className='message-title '
        avatar={<AccountCircleIcon></AccountCircleIcon>}
        action={
          <IconButton onClick={handleRemove} aria-label="settings">
            <CancelIcon></CancelIcon>
          </IconButton>
        }
        title={
          <div style={{ fontFamily: 'Nunito Sans', fontWeight: 600 }}>
            <Typography fontSize={16} variant="inherit" style={{ fontWeight: 700 }}>{name}</Typography>
            <Typography variant="inherit">{email}</Typography>

          </div>
        }
        subheader={
          <div >
            <Typography style={{ fontFamily: 'Nunito Sans' }} variant="inherit">{timeStampSmart(date, currentFullDate)}</Typography>
          </div>
        }

      />


      <CardContent className="inbox-card-text flex-grow-1">


        <Typography variant="p" style={{ fontFamily: 'Nunito Sans', fontWeight: 700 }}>
          Message:
        </Typography>

        <br />
        <Typography variant="p" style={{ fontFamily: 'Nunito Sans', fontWeight: 300 }}>
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
}
