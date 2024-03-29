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


export default function RecipeReviewCard({ name, date, text, id, email }) {
  const [removeMessage] = useMutation(REMOVE_MESSAGE, {
    refetchQueries: [ALL_MESSAGE, "messages"],
  });
  date = date.trim();
  
  let sentHour = date.split(" ")[4][0];
  let sentMin = date.split(" ")[4].split(':')[1];
  let sentMonth = date.split(" ")[0];
  const sentDate = date.split(" ")[1].split('t')[0];
  const currentDate = new Date().getDate()
  let currentMonth = new Date().getMonth() + 1
  let currentHour = new Date().getHours()+1
  let sentTime = date.split(" ")[5]
  let currentMin = new Date().getMinutes()
  console.log(date);
  console.log(`current date: ${currentDate} current hours: ${currentHour}` );
  // Mar 13th, 2024 at 2:39 am
  // console.log(currentMin);
  // console.log(sentHour);
  // console.log(sentMin);
  if (sentTime === 'pm') {
    sentHour = parseInt(sentHour) + 12;
  }


  switch (sentMonth) {
    case 'Jan':
      sentMonth = 1
      break;
    case 'Feb':
      sentMonth = 2
      break;
    case 'Mar':
      sentMonth = 3
      break;
    case 'Apr':
      sentMonth = 4
      break;
    case 'May':
      sentMonth = 5
      break;
    case 'Jun':
      sentMonth = 6
      break;
    case 'Jul':
      sentMonth = 7
      break;
    case 'Aug':
      sentMonth = 8
      break;
    case 'Sep':
      sentMonth = 9
      break;
    case 'Oct':
      sentMonth = 10
      break;
    case 'Nov':
      sentMonth = 11
      break;
    case 'Dec':
      sentMonth = 12
      break;
  }

  // if current month and data is the same then return the different hour if the hour are the same then return the min
  const handleTimeStamp = () => {
    if (parseInt(currentDate) === parseInt(sentDate) && parseInt(currentMonth) === parseInt(sentMonth) && parseInt(currentHour) === parseInt(sentHour)) {
      return `Received ${parseInt(currentMin) - parseInt(sentMin)}  Minutes ago`;
    }
    else if (parseInt(currentDate) === parseInt(sentDate) && parseInt(currentMonth) === parseInt(sentMonth)) {
      return `Received ${parseInt(currentHour) - parseInt(sentHour)} Hours ago`;
    }
    // Return a default value (e.g., 0) if the conditions are not met
    return date;
  }

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
      className="inbox-message"
      sx={{ boxShadow: 5, borderRadius: 5, marginBottom: 2, backgroundColor: 'black' }}
    >
      <CardHeader
        className='message-title'
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
            <Typography style={{ fontFamily: 'Nunito Sans' }} variant="inherit">{handleTimeStamp()}</Typography>
          </div>
        }

      />


      <CardContent className="inbox-card-text">


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
