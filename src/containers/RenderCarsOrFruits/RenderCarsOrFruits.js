import React, { Component } from 'react';


class RenderCarsOrFruits extends Component {
  constructor(props) {
    super(props); 

    this.state = {
      value: "Fruits"
    }
  }

  handleOptionChange = e => {
    this.setState({value: e.target.value});
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log("You chose:", this.state.value);
  }

  render() {
    return (
      <div>
        <h1>This is RenderCarsOrFruits Component</h1>

        <form onSubmit={this.handleSubmit}>
          <label>
            Choose: Cars or Fruits?
            <select value={this.state.value} onChange={this.handleOptionChange}>
              <option value="Cars">Cars</option>
              <option value="Fruits" defaultValue>Fruits</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default RenderCarsOrFruits;