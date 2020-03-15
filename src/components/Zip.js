import React from 'react'
import { newLocation, countries } from '../Data'

const Zip = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault()
        const newLocations = [...props.locations]
        newLocations.unshift(newLocation(props.zipCode, '', ''))
        props.setLocations(newLocations)
    }
    const Choices = (props) => {
        return (
            <option value={props.value}>{props.label}</option>
        )
    }
    const handleCountriesSelectChange = (event) => {
        console.log(event.target.value)
        props.setCountry(event.target.value)
    }
    const handleChange = (event) => {
        props.setZipCode(event.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Add by Zip Code and country:
                    <input type="text" value={props.zipCode} onChange={handleChange} />
                </label>
                <select value={props.country} onChange={handleCountriesSelectChange}>
                    {countries.map((country, index) => (
                        <Choices key={index} value={country.value} label={country.label} />
                    ))}
                </select>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Zip