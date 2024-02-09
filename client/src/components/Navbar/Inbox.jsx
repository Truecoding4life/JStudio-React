import { Modal } from "react-bootstrap";
import { ALL_MESSAGE } from '../../ulti/queries';

import { useQuery } from "@apollo/client";
import RecipeReviewCard from './MessageCard'

const Inbox = ({open, close}) => {
        const { data } = useQuery(ALL_MESSAGE, {
                variables: {
                        username: "admin"
                }
        });
        let messages = [];
        if(data){
                messages=data.user.messages
        }
        
        return (
    <Modal
        show={open}
        onHide={close}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        top
    >
        <Modal.Header style={{ backgroundColor: "rgb(9, 161, 110) " }} closeButton>
            <Modal.Title id="modal-title">Your Messages</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                {messages.map((message)=>(
                        <RecipeReviewCard 
                        style={{padding: '40px'}} 
                        name={message.name} 
                        text={message.message} 
                        date={message.createdAt}
                        id={message._id}
                        email={message.email}
                        >
                       
                        </RecipeReviewCard>
                ))}
        </Modal.Body>
    </Modal>
)
}


export default Inbox;