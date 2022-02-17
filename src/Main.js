import React from 'react';
import HornedBeast from './HornedBeast.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Main.css'

class Main extends React.Component {
  render(){
    // proof of life
    // console.log(this.props)
    let beastArr = [];
    this.props.data.forEach((beasts,index) => {
      beastArr.push(
      
      )
    })
    return(
      <main>
        <Container className="mainContainer">
          <Row xs={2} sm={2} md={3} lg={4}>{this.props.data.map((beasts,index) => ( <Col key={index}>
            <HornedBeast
            addShow={this.props.addShow}
            handleShowModal={this.props.handleShowModal}
            beasts={beasts}
            />
          </Col>
          )
          )}
         </Row>
         </Container>
      </main>
    );
  }
}

export default Main;