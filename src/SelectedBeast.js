import React from 'react';
import Modal from 'react-bootstrap/Modal';
// import Main from './Main.js'

class SelectedBeast extends React.Component {
  render() {
    return (
      <>
        <Modal show={this.props.showModal} onHide={this.props.handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.beasts.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              style={{ width: '100%' }}
              src={this.props.beasts.image_url}
              alt={this.props.beasts.description}
            ></img>
            <ul>
              <li>
                {this.props.beasts.title}
              </li>
              <li>
                {this.props.beasts.description}
              </li>
              <li>
                {this.props.beasts.keyword}
              </li>
              <li>
                Horn/Horns: {this.props.beasts.horns}
              </li>
            </ul>
          </Modal.Body>
        </Modal>
      </>
    );
  }


}

export default SelectedBeast;