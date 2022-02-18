import React from 'react';
import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import data from './data.json';
// import Modal from 'react-bootstrap/Modal';
import SelectedBeast from './SelectedBeast.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      beasts: {},
      data,
    }
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false
    })
  }

  handleShowModal = (beasts) => {
    this.setState({
      showModal: true,
      beasts,
    })
  }

  handleSelect = (event) => {
    let selected = event.target.value;
    if (selected === 'one') {
      let newNums = data.filter(beast => beast.horns === 1);
      this.setState({ data: newNums })
    } else if (selected === 'two') {
      let newNums = data.filter(beast => beast.horns === 2);
      this.setState({ data: newNums })
    } else if (selected === 'three') {
      let newNums = data.filter(beast => beast.horns === 3);
      this.setState({ data: newNums })
    } else if (selected === '100') {
      let newNums = data.filter(beast => beast.horns === 100);
      this.setState({ data: newNums })
    } else {
      this.setState({ data })
    }
  }

  render() {
    return (
      <>
        <Header />
        <SelectedBeast
          showModal={this.state.showModal}
          handleCloseModal={this.handleCloseModal}
          beasts={this.state.beasts} />

        <Main
          data={this.state.data}
          handleShowModal={this.handleShowModal}
          handleSelect={this.handleSelect}
        />
        <Footer />
      </>
    );
  }
}

export default App;
