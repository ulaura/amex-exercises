import React, { Component } from 'react';
import CarsOrFruitsList from './CarsOrFruitsList';


class RenderCarsOrFruits extends Component {
  constructor(props) {
    super(props); 

    this.state = {
      value: "Cars",
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
        <h1 className="page-header">Render Cars or Fruits</h1>

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
          <CarsOrFruitsList name={"Cars"} list={this.state.cars} />
        ) : (
          <CarsOrFruitsList name={"Fruits"} list={this.state.fruits} />
        )}
      </div>
    )
  }
}

export default RenderCarsOrFruits;