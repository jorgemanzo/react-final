import React, { useState, useEffect } from 'react'
import { newLocation, countries } from './Data'
import Location from './Location'

const Main = (props) => {
    const [formValue, setFormValue] = useState('97361')
    const [countryListValue, setCountryListValue] = useState('usa')
    const handleChange = (event) => {
        setFormValue(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        const newLocations = [...props.locations]
        newLocations.unshift(newLocation(formValue, '', ''))
        props.setLocations(newLocations)
    }
    const removeLocation = (childIndex) => {
        const newLocations = props.locations.filter((location, index) => index !== childIndex)
        props.setLocations(newLocations)
    }
    const Choices = (props) => {
        return (
            <option value={ props.value }>{props.label}</option>
        )
    }
    const handleCountriesSelectChange = (event) => {
        console.log(event.target.value)
       setCountryListValue(event.target.value) 
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Add by Zip Code:
                    <input type="text" value={formValue} onChange={handleChange} />
                </label>
                <select value={countryListValue} onChange={handleCountriesSelectChange}>
                    {countries.map((country, index) => (
                        <Choices key={index} value={country.value} label={country.label} />
                    ))}
                </select>
                <input type="submit" value="Submit" />
            </form>
            <div>
                {props.locations.length > 0 ? props.locations.map((location, index) => (
                    <Location key={index} index={index} location={location} removeLocation={removeLocation} />
                )) : <div></div>}
            </div>
        </div>
    )
}

export default Main
