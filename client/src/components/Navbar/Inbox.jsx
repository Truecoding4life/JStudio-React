import { Modal } from "react-bootstrap";
import { ALL_MESSAGE } from "../../ulti/queries";

import { useQuery } from "@apollo/client";
import RecipeReviewCard from "./MessageCard";

const Inbox = ({ open, close, set }) => {
  const { data } = useQuery(ALL_MESSAGE, {
    variables: {
      username: "admin",
    },
  });
  let messages = [];

  if (data) {
    messages = data.user?.messages;
    const messageCount = messages.length;
    set(messageCount);
  }

  return (
    <Modal
      show={open}
      onHide={close}
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      top
    >
      <Modal.Header style={{ backgroundColor: "#22684bec", borderBottom: 'hidden'}} closeButton>
        <Modal.Title id="modal-title"> Inbox</Modal.Title>
      </Modal.Header>
      <div id='modal-body' >
          <Modal.Body>
            {messages.map((message) => (
              <RecipeReviewCard
                name={message.name}
                text={message.message}
                date={message.createdAt}
                id={message._id}
                email={message.email}
                key={message._id}
              ></RecipeReviewCard>
            ))}
          </Modal.Body>
        </div>
    </Modal>
  );
};

export default Inbox;
