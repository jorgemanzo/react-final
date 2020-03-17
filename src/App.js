import React, { useState } from 'react'
import Home from './pages/Home'
import Main from './pages/Main'
import Settings from './pages/Settings'
import NavBar from './components/NavBar'
import './styles/App.css';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

const App = () => {
  // const [response, setResponse] = useState({})
  const [locations, setLocations] = useState([])
  const [allowRefresh, setAllowRefresh] = useState(false)
  const [removing, setRemoving] = useState(false)


  console.log(locations)
  return (
    <div className="App">
      <NavBar />

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
          removing={removing}
          setRemoving={setRemoving}
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
