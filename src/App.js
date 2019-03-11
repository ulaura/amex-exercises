import React from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import Home from "./containers/HomePage/HomePage";
import RenderModalCounter from "./containers/RenderModalCounter/RenderModalCounter";
import RenderText from "./containers/RenderText/RenderText";
import RenderCarsOrFruits from "./containers/RenderCarsOrFruits/RenderCarsOrFruits"


const App = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/rendermodalcounter">Render Modal Counter</Link>
          </li>
          <li>
            <Link to="/rendertext">Render Text</Link>
          </li>
          <li>
            <Link to="/rendercarsorfruits">Render Cars Or Fruits</Link>
          </li>
        </ul>

        <Route exact path="/" component={Home} />
        <Route path="/rendermodalcounter" component={RenderModalCounter} />
        <Route path="/rendertext" component={RenderText} />
        <Route path="/rendercarsorfruits" component={RenderCarsOrFruits} />
      </div>
    </Router>
  )
}

export default App;
