import { Modal } from "react-bootstrap";
import Typography from "@mui/material/Typography";

const Inbox = ({open, close}) => {
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
      <Typography id="modal-description">
        "You don't have any message"
      </Typography>
    </Modal.Body>
  </Modal>
)
}


export default Inbox;