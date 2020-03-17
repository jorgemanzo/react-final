import React, { useState, useEffect } from 'react'
import { getDataByZipCodeAndCountry, getDataByCityAndCountryAndState } from '../api/Data'
import sun from '../images/sun.svg'
import cloud from '../images/cloud.svg'
import snowSnow from '../images/cloud-snow.svg'
import rain from '../images/cloud-rain.svg'
import '../styles/Location.css'
const getTemp = (data) => {
    if(data.main) {
        return Math.floor( ( ( data.main.temp - 273.15) * 1.8 ) + 32 )
    } else {
        return '...'
    }
}
const getFeelsLikeTemp = (data) => {
    if(data.main) {
        return Math.floor( ( ( data.main.feels_like - 273.15) * 1.8 ) + 32 )
    } else {
        return '...'
    }
}
const getCurrentConditions = (data) => {
    if(data.weather && data.weather[0] && data.weather[0].description) { 
        return data.weather[0].description
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
const getIcon = (data) => {
    if(data.weather && data.weather[0] && data.weather[0].main) {
        let res
        switch (data.weather[0].main) {
            case 'Clear':
                res = sun
                break;
            case 'Snow':
                res = snowSnow
                break;
            case 'Rain':
                res = rain
                break;
            default:
                res = cloud
                break;
        }
        return res
    } else {
        return cloud
    }
}
const getHumidity = (data) => {
    if(data.main) {
        return data.main.humidity
    } else {
        return '...'
    }
}
const getData = (props, setResponse) => {
    console.log(props.location)
    if (props.location.zipCode) {
        getDataByZipCodeAndCountry(props.location.zipCode, props.location.country, setResponse)
    } else if (props.location.city) {
        getDataByCityAndCountryAndState(props.location.city, props.location.state, props.location.country, setResponse)
    } else {
        console.log('none')
    }
}
const Location = (props) => {
    const [response, setResponse] = useState({})
    useEffect(() => {
        getData(props, setResponse)
    }, [props.location])
    useEffect(() => {
        if (props.allowRefresh) {
            const timer = setInterval(() => getData(props, setResponse), 60000)
            return () => clearInterval(timer)
        }
    }, [])
    const handleDelete = () => {
        if(props.removing) {
            props.removeLocation(props.index)
        }
    }
    const locationStyle = () => {
        return props.removing ? 'removingLocation' : 'location'
    }
    return (
        <div className={locationStyle()} onClick={handleDelete}>
            <div className="title">
                {
                    props.location.zipCode ?
                        <div>Zip: {props.location.zipCode}, {props.location.country}</div> :
                        <div></div>
                }
                {
                    props.location.city ?
                        <div>{props.location.city}, {props.location.state}, {props.location.country}</div> :
                        <div></div>
                }
            </div>
            <div className="content">
                <img src={getIcon(response)} alt='Current weather' />
                <p>{getTemp(response)} °F, feels like {getFeelsLikeTemp(response)} °F</p>
                <p>Wind: {getWind(response)}, Humidity: {getHumidity(response)}% </p>
                <p>Current Conditions: {getCurrentConditions(response)}</p>
            </div>
        </div>
    )
}

export default Location
