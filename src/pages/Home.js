import React from 'react';
const Home = (props) => {
    return (
        <div>
            <h1>Weather App</h1>
            <ul>
                <li>Use "My Locations" to add weather locations</li>
                <li>Visit the Settings to clear all your existing cities, and enable automatic refreshing</li>
                <li>You can also navigate to /main/addZip/`zipCode`/`country` to automatically add a location</li>
                <li>Visit the about page to learn how this was made</li>
            </ul>
        </div>
    )
}

export default Home
