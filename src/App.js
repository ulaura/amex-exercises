import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./containers/HomePage/HomePage";
import RenderModalCounter from "./containers/RenderModalCounter/RenderModalCounter";
import RenderText from "./containers/RenderText/RenderText";
import RenderCarsOrFruits from "./containers/RenderCarsOrFruits/RenderCarsOrFruits"


const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/rendermodalcounter" component={RenderModalCounter} />
        <Route path="/rendertext" component={RenderText} />
        <Route path="/rendercarsorfruits" component={RenderCarsOrFruits} />
      </div>
    </Router>
  )
}

export default App;
