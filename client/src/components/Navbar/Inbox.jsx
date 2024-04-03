  import { Modal } from "react-bootstrap";
  import { ALL_MESSAGE } from "../../ulti/queries";

  import { useQuery } from "@apollo/client";
  import RecipeReviewCard from "./MessageCard";

  const Inbox = ({ open, close }) => {
    const { data } = useQuery(ALL_MESSAGE, {
      variables: {
        username: "admin",
      },
    });
    let messages = [];

    if (data) {
      messages = data?.user?.messages;
      
    }

    return (
      <Modal
        show={open}
        onHide={close}
        size="xl"
        className="inbox-modal "
        backdrop='none'
      >
        <div id='modal-body' style={{borderRadius:30}}>
        <Modal.Header id='inbox-header'closeButton>
          <Modal.Title id="modal-title"> Inbox</Modal.Title>
        </Modal.Header>
        
            <Modal.Body >
             

             <div className="row  ">
              {messages.slice().reverse().map((message) => (

                <div key={message._id} className="col-12 col-sm-12 col-md-6 col-xl-3  d-flex  animate__animated animate__fadeIn">
                    <RecipeReviewCard
                  name={message.name}
                  text={message.message}
                  date={message.createdAt}
                  id={message._id}
                  email={message.email}
                 
                ></RecipeReviewCard>
                </div>
              
              ))}
               </div>
            </Modal.Body>
          </div>
      </Modal>
    );
  };

  export default Inbox;
