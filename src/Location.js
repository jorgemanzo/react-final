import React, { useState, useEffect } from 'react'
import { getDataByZipCodeAndCountry } from './Data'

const getTemp = (data) => {
    if(data.main) {
        return Math.floor( ( ( data.main.temp - 273.15) * 1.8 ) + 32 )
    } else {
        return '...'
    }
}

const getWind = (data) => {
    if(data.main) {
        return data.wind.speed
    } else {
        return '...'
    }
}

const getHumidity = (data) => {
    if(data.main) {
        return data.main.humidity
    } else {
        return '...'
    }
}
const Location = (props) => {
    const [response, setResponse] = useState({})
    useEffect(() => {
        getDataByZipCodeAndCountry(props.location.zipCode, props.country, setResponse)
    }, [])
    const handleDelete = () => {
        props.removeLocation(props.index)
    }
    return (
        <div>
            <button onClick={handleDelete}>X</button>
            <p>Zip: {props.location.zipCode}, {getTemp(response)} F</p>
            <p>Wind: {getWind(response)}, Humidity: {getHumidity(response)}% </p>
        </div>
    )
}

export default Location
