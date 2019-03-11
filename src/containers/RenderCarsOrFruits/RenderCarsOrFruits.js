import React, { Component } from 'react';
import CarsList from "./CarsList";
import FruitsList from "./FruitsList";


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

  render() {
    return (
      <div>
        <h1>This is RenderCarsOrFruits Component</h1>

        <form>
          <label>
            Choose: Cars or Fruits?
            <select value={this.state.value} onChange={this.handleOptionChange}>
              <option value="Cars">Cars</option>
              <option value="Fruits" defaultValue>Fruits</option>
            </select>
          </label>
        </form>

        {this.state.value === "Cars" ? (
          <CarsList />
        ) : (
          <FruitsList />
        )}
      </div>
    )
  }
}

export default RenderCarsOrFruits;