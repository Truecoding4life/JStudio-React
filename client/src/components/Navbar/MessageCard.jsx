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
      style={{
        boxShadow: "0 2px 5px 0 rgba(0, 0, 0, 0.4)", 
        backgroundColor: '#bdc9c5cd',
        color:'black',
        fontFamily: 'Poppins',
        fontWeight:200,
        marginBottom:40
      }}
      key={id}
      className="inbox-message"
    >
      <CardHeader
        avatar={<AccountCircleIcon></AccountCircleIcon>}
        action={
          <IconButton onClick={handleRemove} aria-label="settings">
            <CancelIcon></CancelIcon>
          </IconButton>
        }
        title={
          <div style={{ fontFamily: 'Raleway', fontWeight: 700 }}>
            <Typography variant="inherit">{name}</Typography>
          </div>
        }
        subheader={
          <div style={{ fontFamily: 'Raleway', fontWeight: 700 }}>
            <Typography variant="inherit">{date}</Typography>
          </div>
        }
        
      />

        
      <CardContent className="inbox-card-text">
        <Typography variant="p" style={{ fontFamily: 'Raleway', fontWeight:700 }}>
          Email:
        <br />
        </Typography>
        <Typography variant="p" style={{ fontFamily: 'Raleway', fontWeight: 200 }}>
          {email}
        </Typography>
        <br /> {/* Line break */}
        <Typography variant="p" style={{ fontFamily: 'Raleway', fontWeight:700 }}>
          Message:
        </Typography>

        <br />
        <Typography variant="p" style={{ fontFamily: 'Raleway', fontWeight: 200 }}>
          {text}
        </Typography>
      </CardContent>
      </Card>
  );
}
