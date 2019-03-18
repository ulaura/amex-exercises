import React, { Component } from 'react';
import './homepage.css'

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1 className="page-header">Amex React Challenge by Laura Unaeze</h1>
        <p id="home-message">Please use the buttons below or the navigation bar above to navigate to each exercise.</p>
        <div id="home-buttons">
          <a href="/rendermodalcounter" className="home-button">Render Modal Counter</a>
          <a href="/rendertext" className="home-button">Render Text</a>
          <a href="/rendercarsorfruits" className="home-button">Render Cars or Fruits</a>
        </div>
      </div>
    )
  }
}

export default HomePage;