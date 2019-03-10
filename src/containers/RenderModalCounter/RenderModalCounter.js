import React, { Component } from 'react';
import Modal from "./Modal";


class RenderModalCounter extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      toggleModalOpen: false,
      modalOpenCounter: 0
    }
  }

  handleModalOpen = () => {
    this.setState({
      toggleModalOpen: true,
      modalOpenCounter: ++this.state.modalOpenCounter
    });
  }

  handleModalClose = () => {
    this.setState({toggleModalOpen: false});
  }

  handleResetEverything = () => {
    this.setState({
      toggleModalOpen: false,
      modalOpenCounter: 0 
    })
  }

  render() {
    return (
      <div>
        <h1>Click the button to open the modal:</h1>

        {this.state.toggleModalOpen ? (
          <Modal 
            handleModalClose={this.handleModalClose}
            modalOpenCounter={this.state.modalOpenCounter} 
          />
        ) : (
          <button 
            onClick={this.handleModalOpen}
          >
            Click Here
          </button>
        )}

        <button
          id="modal-reset-button" 
          onClick={this.handleResetEverything}
        >
          Reset Everything
        </button>
      </div>
    )
  }
}

export default RenderModalCounter;