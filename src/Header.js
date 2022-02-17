import React from 'react';

class Header extends React.Component {
  render(){
    return(
      <header>
        <h1>Gallery of Horns {this.props.showMe}</h1>
      </header>
    );
  }
}

export default Header;