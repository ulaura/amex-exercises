import React, { Component } from 'react';


class RenderText extends Component {
  constructor(props){
    super(props);

    this.state = {
      position: 0
    }
  }

  componentDidMount() {
   window.addEventListener("scroll", this.handleGrowOrShrink);
  }

  handleGrowOrShrink = () => {
    if (window.scrollY > this.state.position) {
      this.setState({position: window.scrollY});
    } else if (this.state.position > window.scrollY) {
      this.setState({position: window.scrollY});
    }
  }

  render() {
    let positionFont = 12 + this.state.position;

    return (
      <div id="render-text-container" style={{height: "900px"}}>
        <h1 className="page-header">Render Text</h1>

        <p style={{position: "fixed", fontSize: positionFont }}>
          This text will grow or shrink while scrolling. Start by scrolling down...
        </p>
      </div>
    )
  }
}

export default RenderText;