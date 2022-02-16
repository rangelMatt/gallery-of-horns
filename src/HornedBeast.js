import React from 'react';
import Card from 'react-bootstrap/Card';


import './HornedBeast.css'

class HornedBeast extends React.Component {
  // THIS is how we setup state in a component
  constructor(props){
    super(props);
    this.state = {
      votes: 0,
      needsHelp: false,
    }
  }

  handleVotes = () => {
    this.setState({
      votes: this.state.votes + 1,
      // we can add things to state with setState only, not by initially adding to state in constructor
      someRandomThing: 'banana'
    })
  }

  render(){
    
    return(
      <Card style={{width: '18rem'}}>
      <article>
      <h2 >{this.props.title}</h2>
      <p>☠: {this.state.votes}</p>
      <img src={this.props.image_url}
        alt = {this.props.description}
        title = {this.props.title}
        onClick ={this.handleVotes}
      />
      <p>{this.props.description}</p>
    </article>
    </Card>
    )
  }
}

export default HornedBeast;