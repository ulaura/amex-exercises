import React, { Component } from 'react';

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1 className="page-header">Amex React Challenge by Laura Unaeze</h1>
        <p>Exercises:</p>
        <a href="/rendermodalcounter">Render Modal Counter</a>
        <br />
        <a href="/rendertext">Render Text</a>
        <br />
        <a href="/rendercarsorfruits">Render Cars or Fruits</a>
      </div>
    )
  }
}

export default HomePage;