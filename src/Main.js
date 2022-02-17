import React from 'react';
import HornedBeast from './HornedBeast.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import './Main.css'

class Main extends React.Component {
  render(){
    // proof of life
    // console.log(this.props)
    let beastArr = [];
    this.props.data.forEach((beasts,index) => {
      beastArr.push(
      <HornedBeast
      key = {index}
      title ={beasts.title}
      image_url={beasts.image_url}
      description={beasts.description}
      addShow={this.props.addShow}
      handleShowModal={this.props.handleShowModal}
      beasts={beasts}
      />
      )
    })
    return(
      <main>
        <Container className="mainContainer">
          <Row xs={2} sm={2} md={3} lg={4} className ="deck">
          {beastArr}
         </Row>
         </Container>
      </main>
    );
  }
}

export default Main;