import React from 'react'
import '../styles/Remove.css'

const Remove = (props) => {
    const handleClick = () => {
        props.setRemoving(!props.removing)
    }
    return (
        <div>
            <button className="removingButton" onClick={handleClick}>{props.removing ? 'Click on a location to remove it' : 'Remove a location'}</button>
        </div>
    )
}

export default Remove