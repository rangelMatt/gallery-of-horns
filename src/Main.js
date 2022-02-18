import React from 'react';
import HornedBeast from './HornedBeast.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form } from 'react-bootstrap';

import './Main.css'


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      word: '',
    }
  }

  handleName = (event) => {
    this.setState({
      name: event.target.value
    })
  }
  handleWord = (event) => {
    this.setState({
      word: event.target.value
    })
  }



  handleSubmit = event => {
    event.preventDefault()
    let name = event.target.name.value;
    let word = event.target.word.value;
    let selected = event.target.selected.value;

    console.log(name, word, selected)

    this.setState({
      submitName: name,
      submitWord: word,
      submitSelected: selected
    })
    console.log('state form event handler', this.state)
  }

  render() {

    let beastArr = [];
    this.props.data.forEach((beasts, index) => {
      beastArr.push(

      )
    })
    return (
      <main>
        <h3>Gotta Sort'em All!  1, 2, 3, pick your fav qty! {this.state.name}</h3>

        <Container>
          <Form onSubmit={this.handleSubmit} style={{ width: 'max-content', margin: 'auto' }}>
            {/* <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" onInput={this.handleName} />
            </Form.Group>

            <Form.Group controlId="word">
              <Form.Label>handleWord</Form.Label>
              <Form.Control type="text" onChange={this.handleWord} />
            </Form.Group> */}

            <Form.Group controlId="selected">
              <Form.Select onChange={this.props.handleSelect}>
              <option value="data">All</option>
                <option value="one">1</option>
                <option value="two">2</option>
                <option value="three">3</option>
                <option value="100">100</option>
              </Form.Select>
            </Form.Group>
            {/* <Button type="submit">Submit</Button> */}
          </Form>
        </Container>


        <Container className="mainContainer">
          <Row xs={2} sm={2} md={3} lg={4}>{this.props.data.map((beasts, index) => (<Col key={index}>
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

