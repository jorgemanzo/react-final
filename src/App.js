import React, { useState } from 'react'
import Home from './pages/Home'
import Main from './pages/Main'
import Settings from './pages/Settings'
import './styles/App.css';
import {
  Switch,
  Route,
  Redirect,
  NavLink
} from 'react-router-dom'

const App = () => {
  // const [response, setResponse] = useState({})
  const [locations, setLocations] = useState([])
  const [allowRefresh, setAllowRefresh] = useState(false)

  const links = [
    {to: '/', label: 'Home'},
    {to: '/main', label: 'My Locations'},
    {to: '/settings', label: 'Settings'},
  ]

  const Link = (props) => {
    return (
      <li className="link">
          <NavLink exact to={props.to}>
            {props.label}
          </NavLink>
      </li>
    )
  }
  console.log(locations)
  return (
    <div className="App">
      <p>stuuuuuuuuuuf</p>
      <div className="navContainer">
        <ul className='navbar'>
          {
            links.map((lin, index) => ( 
              <Link key={index}  to={lin.to} label={lin.label} />
            ))
          }
        </ul>
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
          <Main 
          setLocations={setLocations} 
          locations={locations} 
          allowRefresh={allowRefresh}
          />
        </Route>
        <Route path='/settings'>
          <Settings setLocations={setLocations} allowRefresh={allowRefresh} setAllowRefresh={setAllowRefresh}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
