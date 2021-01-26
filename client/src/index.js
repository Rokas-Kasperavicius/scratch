import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom"

// import About from './About'
// import Home from './Home'
const About = React.lazy(() => import('./About'));
const Home = React.lazy(() => import('./Home'));

ReactDOM.render((
  <Suspense fallback={<div>Loading...</div>}>
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Welcome!</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <div>Welcome!</div>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  </Suspense>
), document.getElementById('root'));
