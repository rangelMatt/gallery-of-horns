import React from 'react';
import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import data from './data.json';
// import Modal from 'react-bootstrap/Modal';
import SelectedBeast from './SelectedBeast.js';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      showModal: false,
      beasts: {},
    }
  }

  handleCloseModal = () => {
    this.setState({
      showModal:false
    })
  }

  handleShowModal = (beasts) => {
    this.setState({
      showModal:true,
      beasts
    })
  }

  render(){
    return (
      <>
       <Header/>
      <SelectedBeast 
      showModal={this.state.showModal}
      handleCloseModal={this.handleCloseModal}
      beasts={this.state.beasts}/>

        <Main 
        data={data} 
        handleShowModal={this.handleShowModal}
        />
        <Footer />
      </>
    );
  }
}

export default App;
