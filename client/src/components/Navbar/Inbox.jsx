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
      
      >
        <div id='modal-body' style={{borderRadius:5}}>
        <Modal.Header id='inbox-header'closeButton>
          <Modal.Title id="modal-title"> Inbox</Modal.Title>
        </Modal.Header>
        
            <Modal.Body >
              {messages.slice().reverse().map((message) => (
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
