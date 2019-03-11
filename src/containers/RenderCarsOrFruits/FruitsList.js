import React, { Component } from 'react';

class FruitsList extends Component {
  constructor(props){
    super(props);

    this.state = {
      fruits: ["Avocado", "Lemon", "Cherries", "Prickly Pear", "Blueberries"]
    }
  }

  render() {
    return (
      <div>
        <h2>List of Fruits</h2>
        <ul>
          {this.state.fruits.map(fruit => {
            return <li key={fruit}>{fruit}</li>
          })}
        </ul>
    </div>
    )
  }
}

export default FruitsList; 