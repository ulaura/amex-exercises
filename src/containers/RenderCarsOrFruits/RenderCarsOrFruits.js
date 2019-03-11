import React, { Component } from 'react';
import CarsList from "./CarsList";
import FruitsList from "./FruitsList";


class RenderCarsOrFruits extends Component {
  constructor(props) {
    super(props); 

    this.state = {
      value: "Cars",
      sortDirection: false,
      cars: ["Tesla Model 3", "Batmobile", "Nissan Versa", "Magic Carpet", "Infiniti Q50"]
    }
  }

  handleOptionChange = e => {
    this.setState({value: e.target.value});
  }

  handleSortButton = () => {
    if (this.state.sortDirection === false) {
      this.setState((state) => ({
        sortDirection: state.sortDirection = "asc"
      }, console.log(this.state.sortDirection)))
    }
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
              <option value="Fruits">Fruits</option>
            </select>
          </label>
        </form>

        {this.state.value === "Cars" ? (
          <CarsList cars={this.state.cars} sort={this.state.sortDirection} />
        ) : (
          <FruitsList sort={this.state.sortDirection} />
        )}

        <button onClick={this.handleSortButton}>Sort!</button>
      </div>
    )
  }
}

export default RenderCarsOrFruits;