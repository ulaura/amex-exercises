import React, { Component } from 'react';

class Modal extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <h1>THE MODAL IS HERE</h1>

        {this.props.modalOpenCounter === 1 ? (        
          <p>
            Modal has been clicked 1 time.
          </p>) 
        : (
          <p>
            Modal has been clicked {this.props.modalOpenCounter} times.
          </p>
        )}

        <button onClick={this.props.handleModalClose}>Close</button>
      </div>
    )
  }
}

export default Modal;