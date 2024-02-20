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
        padding: "5px",
        marginBottom: "30px",
        backgroundColor: "#d8dcdf",
        boxShadow: "0 2px 5px 0 rgba(0, 0, 0, 0.4)", // Added boxShadow property value
      }}
      key={id}
    >
      <CardHeader
        avatar={<AccountCircleIcon></AccountCircleIcon>}
        action={
          <IconButton onClick={handleRemove} aria-label="settings">
            <CancelIcon></CancelIcon>
          </IconButton>
        }
        title={name}
        subheader={date}
      />

      <CardContent>
        <Typography variant="h6" color="text.secondary">
          Email:
        </Typography>
        <Typography variant="p" color="text.secondary">
          {email}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Message:
        </Typography>
        <Typography variant="p" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
}
