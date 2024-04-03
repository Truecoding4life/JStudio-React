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
import * as dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(LocalizedFormat)

function monthToInt(sentMonth){
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
  return sentMonth;
}



export default function RecipeReviewCard({ name, date, text, id, email }) {
  const [removeMessage] = useMutation(REMOVE_MESSAGE, {
    refetchQueries: [ALL_MESSAGE, "messages"],
  });
  date = date.trim();
  const currentFullDate = dayjs(dayjs().locale('en').toISOString()).format('LLL').split(' ');
  
 
  let sentYear = parseInt(date.split(" ")[2]);
  // tested
  const sentDate = parseInt(date.split(" ")[1].split('t')[0]); // 12
  let sentMonth = monthToInt(date.split(" ")[0]); // 3
  let sentHour = parseInt(date.split(" ")[4][0]); // 2
  let sentTime = date.split(" ")[5] // am
  let sentMin = parseInt(date.split(" ")[4].split(':')[1]); // 39
  const currentDate = parseInt(currentFullDate[1]);
  let currentMonth = monthToInt(currentFullDate[0].slice(0,3))
  let currentTime = currentFullDate[4].toLowerCase();
  let currentHour = parseInt(currentFullDate[3].split(":")[0])
  let currentMin = currentFullDate[3].split(":")[1]
//
  console.log('currentFullDate', currentFullDate);
 

  

  // if current month and data is the same then return the different hour if the hour are the same then return the min
  const handleTimeStamp = () => {
    if (currentDate === sentDate && currentMonth === sentMonth && currentHour === sentHour && currentTime === sentTime) {
      return `Received ${currentMin - sentMin}  Minutes ago`;
    }
    else if (currentDate === sentDate && currentMonth === sentMonth && currentHour !== sentHour)  {
      return `Received ${currentHour - sentHour} Hours ago`;
    }
    // // Return a default value (e.g., 0) if the conditions are not met
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
