import React, { Component } from 'react';
import Modal from "./Modal";


class RenderModalCounter extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      toggleModal: false
    }
  }

  handleModalOpen = () => {
    this.setState({toggleModal: true});
  }

  handleModalClose = () => {
    this.setState({toggleModal: false});
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
          <Modal handleModalClose={this.handleModalClose} />
        ) : null}
      </div>
    )
  }
}

export default RenderModalCounter;