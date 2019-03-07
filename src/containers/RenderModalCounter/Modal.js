import React, { Component } from 'react';

class Modal extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <h1>THE MODAL IS HERE</h1>
        <button onClick={this.props.handleModalClose}>Close</button>
      </div>
    )
  }
}

export default Modal;