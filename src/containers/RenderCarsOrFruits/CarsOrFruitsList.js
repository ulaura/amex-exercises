import React, { Component } from 'react';

class CarsOrFruitsList extends Component {
  constructor(props){
    super(props);

    this.state = {
      sortDirection: null,
      sortedList: []
    }
  }

  handleSortButton = () => {
    if (this.state.sortDirection === null || "des") {
      this.setState((state) => ({
        sortDirection: state.sortDirection = "asc"
      }))
    } 

    if (this.state.sortDirection === "asc") {
      this.setState((state) => ({
        sortDirection: state.sortDirection = "des"
      }))
    } 
  }


  render() {
    let sortedList = this.props.list;

    return (
      <div>
        <h2>List of {this.props.name}</h2>
        <ul> 
          {/* Default list setting. Unsorted */}
          {this.state.sortDirection === null ? (
            this.props.list.map(item => {
              return <li key={item}>{item}</li>
            })
          ) : (
            // List sorted to ascending order 
            this.state.sortDirection === "asc" ? (
              sortedList.sort().map(item => {
                return <li key={item}>{item}</li>
              })
            ) : (
              // List sorted to descending order
              this.props.list.sort().reverse().map(item => {
                return <li key={item}>{item}</li>
              })
            )
          )} 
        </ul>
        <button onClick={this.handleSortButton}>Sort!</button>
      </div>
    )
  }
}

export default CarsOrFruitsList; 