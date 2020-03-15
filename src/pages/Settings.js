import React from 'react'
const Settings = (props) => {
    const handleClear = () => {
        props.setLocations([])
    }
    const handleCheckboxChange = () => {
        props.setAllowRefresh(!props.allowRefresh)
    }
    return (
        <div>
            <button onClick={handleClear}>Clear Cities</button>
            <label>
                Enable automatic refreshing
                <input name="Enable automatic refreshing" type="checkbox" checked={props.allowRefresh} onChange={handleCheckboxChange}/>
            </label>
        </div>
    )
}

export default Settings