import React, { Component } from 'react';

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>This is the Home Page</h1>
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