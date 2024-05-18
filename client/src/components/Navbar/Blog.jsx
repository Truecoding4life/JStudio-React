import { Modal } from "react-bootstrap";
import { ALL_MESSAGE } from "../../ulti/queries";

import { useQuery } from "@apollo/client";
import RecipeReviewCard from "./MessageCard";

const BlogContainer = ({ open, close }) => {
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
      
    >
      <div id='modal-body' style={{borderRadius:30}}>
      <Modal.Header id='inbox-header'closeButton>
        <Modal.Title id="modal-title"> My Blogs</Modal.Title>
      </Modal.Header>
      
          <Modal.Body >
           

           <div className="row  ">
            
             </div>
          </Modal.Body>
        </div>
    </Modal>
  );
};

export default BlogContainer;
