import React, { useState, useEffect } from 'react'
import Home from './pages/Home'
import Main from './pages/Main'
import logo from './logo.svg';
import './styles/App.css';
import {
  Switch,
  Route,
  Redirect,
  Link,
  NavLink
} from 'react-router-dom'

const App = () => {
  // const [response, setResponse] = useState({})
  const [locations, setLocations] = useState([])
  console.log(locations)
  return (
    <div className="App">
      <p>stuuuuuuuuuuf</p>
      <div className='navbar'>
        <li>
          <NavLink exact to='/'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to='/main'>
            My Locations
          </NavLink>
        </li>
      </div>
      <Switch>
        <Route exact path='/'>
          <Redirect to='/home' />
        </Route>
        <Route path='/main/addZip/:zipCode/:country'>
          <Main setLocations={setLocations} locations={locations} />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/main'>
          <Main setLocations={setLocations} locations={locations} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
