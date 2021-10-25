import { TrendingUpRounded } from '@material-ui/icons';
import React, {useState} from 'react'
import {Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from "reactstrap";

function Delete(props) {
  const [modal, setModal] = useState(false);

    const toggleModal=() => {
        setModal(props.state)
      }
      console.log(modal)
    return(
      <>
    <Modal isOpen={modal} toggle={toggleModal}>
    <ModalHeader>آمدن</ModalHeader>
    <ModalBody>
      <Button type="submit" value="submit" 
      style={{backgroundColor:"#90DAF2",color:'black',borderColor:'#90DAF2',marginTop:'10px'}}>
          Delete
      </Button>
    </ModalBody>
  </Modal>
    <h1>Hellow World</h1>
    </>
  )
}

export default Delete
