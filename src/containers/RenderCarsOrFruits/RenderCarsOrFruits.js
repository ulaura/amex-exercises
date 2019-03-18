import React, { Component } from 'react';
import CarsOrFruitsList from './CarsOrFruitsList';


class RenderCarsOrFruits extends Component {
  constructor(props) {
    super(props); 

    this.state = {
      value: "Cars",
      sortDirection: false,
      cars: ["Tesla Model 3", "Batmobile", "Nissan Versa", "Magic Carpet", "Infiniti Q50"],
      fruits: ["Avocado", "Lemon", "Cherries", "Prickly Pear", "Blueberries"]
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
              <option value="Fruits">Fruits</option>
            </select>
          </label>
        </form>

        {this.state.value === "Cars" ? (
          <CarsOrFruitsList list={this.state.cars} sort={this.state.sortDirection} />
        ) : (
          <CarsOrFruitsList list={this.state.fruits} sort={this.state.sortDirection} />
        )}
      </div>
    )
  }
}

export default RenderCarsOrFruits;