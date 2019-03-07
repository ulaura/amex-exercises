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
        <button 
          onClick={this.handleModalOpen}
          // handleModalClose={this.handleModalClose}
        >
          Click Here
        </button>

        {this.state.toggleModal ? (
          <Modal />
        ) : null}
      </div>
    )
  }
}

export default RenderModalCounter;