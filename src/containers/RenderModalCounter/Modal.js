import React, { Component } from 'react';

class Modal extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div id="modal">
        <div id="modal-header">
          <h1 id="modal-header-text">THE MODAL IS OPEN</h1>
          <div 
            id="modal-close-button" 
            onClick={this.props.handleModalClose}
          >
            X
          </div>
        </div>

        {this.props.modalOpenCounter === 1 ? (        
          <p className="modal-message">
            This modal has been clicked 1 time.
          </p>) 
        : (
          <p className="modal-message">
            This modal has been clicked {this.props.modalOpenCounter} times.
          </p>
        )}
      </div>
    )
  }
}

export default Modal;