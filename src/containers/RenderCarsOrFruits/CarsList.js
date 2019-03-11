import React, { Component } from 'react';

class CarsList extends Component {
  // constructor(props){
  //   super(props);

  //   // this.state = {
  //   //   cars: ["Tesla Model 3", "Batmobile", "Nissan Versa", "Magic Carpet", "Infiniti Q50"]
  //   // }
  // }


  render() {
    return (
      <div>
        <h2>List of Cars</h2>
        <ul>
          {/* {this.props.cars.map(car => {
            return <li key={car}>{car}</li>
          })} */}

          {this.props.sort === "asc" ? (
            [...this.props.cars].sort().map(car => {
              return <li key={car}>{car}</li>
            })
          ) : (
            this.props.cars.map(car => {
              return <li key={car}>{car}</li>
            })
          )}
        </ul>
      </div>
    )
  }
}

export default CarsList; 