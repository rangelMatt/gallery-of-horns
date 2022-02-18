import React from 'react';
import Card from 'react-bootstrap/Card';


import './HornedBeast.css'

class HornedBeast extends React.Component {
  // THIS is how we setup state in a component
  constructor(props) {
    super(props);
    this.state = {
      votes: 0,
    }
  }

  handleVotes = () => {
    this.setState({
      votes: this.state.votes + 1,
      // we can add things to state with setState only, not by initially adding to state in constructor
    })
  }

  handleBeastsClick = () => {
    this.handleVotes()
    this.props.handleShowModal(this.props.beasts);
  };

  render() {
    // console.log(this.props)
    return (
      <Card style={{ width: '18rem' }} className="p-4 h-100">
        <Card.Img
          onClick={this.handleBeastsClick}
          src={this.props.beasts.image_url}
          alt={this.props.beasts.description}
          title={this.props.beasts.title}
        />
        <Card.Body>
          <Card.Title>{this.props.beasts.title}</Card.Title>
          <Card.Text>☠:{this.state.votes}</Card.Text>
          <Card.Text>{this.props.beasts.description}</Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default HornedBeast;