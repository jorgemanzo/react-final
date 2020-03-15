import React, { useState, useEffect } from 'react'
import { getDataByZipCodeAndCountry, getDataByCityAndCountryAndState } from '../api/Data'

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
        console.log(props.location)
        if(props.location.zipCode){
            getDataByZipCodeAndCountry(props.location.zipCode, props.location.country, setResponse)
        } else if(props.location.city){
            getDataByCityAndCountryAndState(props.location.city, props.location.state, props.location.country, setResponse)
        } else {
            console.log('none')
        }
    }, [props.location])
    const handleDelete = () => {
        props.removeLocation(props.index)
    }
    return (
        <div>
            <button onClick={handleDelete}>X</button>
            {
                props.location.zipCode ?
                <p>Zip: {props.location.zipCode}</p> :
                <div></div>
            }
            <p>{getTemp(response)} F</p>
            <p>Wind: {getWind(response)}, Humidity: {getHumidity(response)}% </p>
        </div>
    )
}

export default Location
