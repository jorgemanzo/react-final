import React from 'react';
import { useHistory } from 'react-router-dom'
import '../styles/Home.css'
const Home = (props) => {
    const history = useHistory()
    const handleClick = () => {
        history.push('/main')
    }
    return (
        <div className="content">
            <h1>Weather App</h1>
            <ul>
                <li>Use "My Locations" to add weather locations</li>
                <li>Visit the Settings to clear all your existing cities, and enable automatic refreshing</li>
                <li>You can also navigate to /main/addZip/`zipCode`/`country` to automatically add a location</li>
                <li>Visit the about page to learn how this was made</li>
            </ul>
            <button className="goButton" onClick={handleClick}>Go</button>
        </div>
    )
}

export default Home
