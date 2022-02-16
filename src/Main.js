import React from 'react';
import HornedBeast from './HornedBeast.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/row';

import './Main.css'

class Main extends React.Component {
  render(){
    // proof of life
    //console.log(this.props.data)
    let beastArr = [];
    this.props.data.forEach((beasts,index) => {
      beastArr.push(
      <HornedBeast
      key = {index}
      title ={beasts.title}
      image_url={beasts.image_url}
      description={beasts.description}
      />
      )
    })
    return(
      <main>
        <Container>
          <Row md={4}>
          {beastArr}
         </Row>
         </Container>
      </main>
    );
  }
}

export default Main;