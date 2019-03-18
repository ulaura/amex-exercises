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
      }), this.sortAscend())
    }
  }

  sortAscend = () => {
    let sortAscend = this.props.list.sort();
    this.setState({sortedList: sortAscend})
  }


  render() {
    return (
      <div>
        <h2>List of Cars</h2>
        <ul>
          {this.state.sortDirection && this.state.sortDirection === "asc" ? (
            this.state.sortedList.map(item => {
              return <li key={item}>{item}</li>
            })
          ) : (
            this.props.list.map(item => {
              return <li key={item}>{item}</li>
            })
          )}
        </ul>
        <button onClick={this.handleSortButton}>Sort!</button>
      </div>
    )
  }
}

export default CarsOrFruitsList; 