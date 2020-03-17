import React from 'react'
import '../styles/Settings.css'
const Settings = (props) => {
    const handleClear = () => {
        props.setLocations([])
    }
    const handleCheckboxChange = () => {
        props.setAllowRefresh(!props.allowRefresh)
    }
    return (
        <div>
            <label className="auto">
                Enable automatic refreshing
                <input name="Enable automatic refreshing" type="checkbox" checked={props.allowRefresh} onChange={handleCheckboxChange}/>
            </label>
            <br/>
            <button className="clearButton" onClick={handleClear}>Clear Cities</button>
        </div>
    )
}

export default Settings