import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";

const DeleteModal=(props)=> {
  const [modal, setModal] = useState(props.state);
  console.log(props.id,"iddd");

  const toggleModal = () => {
    setModal(!modal);
  };

  const cancel = () => {
    setModal(false)
      props.onClick()
  }

  return (
    <>
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader>آمدن</ModalHeader>
        <ModalBody>
          <h1>کیا آپ واقعی اسے حذف کرنا چاہتے ہیں؟</h1>
          <div style={{display:"flex", alignItems:"center",justifyContent:"left"}}>
          <Button
            type="submit"
            value="submit"
            style={{
              backgroundColor: "#D11A2A",
              color: "black",
              marginRight: "10px",
            }}
          >
            Delete
        </Button>
          <Button
            onClick={() => cancel()}
            style={{ backgroundColor: "#4CAF50" }}
          >
            cancel
          </Button>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
}

export default DeleteModal;