import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Main from './Main.js'

class SelectedBeast extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      beasts: true,
    }
  }


  render(){
    return (
      <>
        <Modal>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.title}</Modal.Title>
          </Modal.Header>
            <Modal.Body>
              {this.state.title}
            </Modal.Body>
        </Modal>
      </>
    );
  }


}

export default SelectedBeast;