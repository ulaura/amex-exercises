import React, { Component } from 'react';
import Modal from "./Modal";
import './rendermodalcounter.css'


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
      <div 
        id="render-modal-container"
        className = {this.state.toggleModalOpen ? (
          "modal-overlay"
        ) : null}
      >
        <h1 id="main-header">Click the button to open the modal:</h1>

        <div id="modal-location">
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
        </div>

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