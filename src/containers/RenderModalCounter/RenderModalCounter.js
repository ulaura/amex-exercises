import React, { Component } from 'react';
import Modal from "./Modal";


class RenderModalCounter extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      toggleModal: false,
      modalOpenCounter: 0
    }
  }

  handleModalOpen = () => {
    this.setState({
      toggleModal: true,
      modalOpenCounter: ++this.state.modalOpenCounter
    });
  }

  handleModalClose = () => {
    this.setState({toggleModal: false});
  }

  handleResetEverything = () => {
    this.setState({
      toggleModal: false,
      modalOpenCounter: 0 
    })
  }

  render() {
    return (
      <div>
        <h1>Click the button to open the modal:</h1>

        {this.state.toggleModal ? null : (
          <button 
            onClick={this.handleModalOpen}
          >
            Click Here
          </button>
        )}

        {this.state.toggleModal ? (
          <Modal 
            handleModalClose={this.handleModalClose}
            modalOpenCounter={this.state.modalOpenCounter} 
          />
        ) : null}

        <button onClick={this.handleResetEverything}>Reset Everything</button>
      </div>
    )
  }
}

export default RenderModalCounter;