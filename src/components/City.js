import React from 'react'
import { countries } from '../Data'
const City = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault()
        const newLocations = [...props.locations]
        newLocations.unshift({city: props.city, state: props.province, country: props.country})
        props.setLocations(newLocations)
    }
    const Choices = (props) => {
        return (
            <option value={props.value}>{props.label}</option>
        )
    }
    const handleCityChange = (event) => {
        props.setCity(event.target.value)
    }
    const handleCountriesSelectChange = (event) => {
        console.log(event.target.value)
        props.setCountry(event.target.value)
    }
    const handleProvinceChange = (event) => {
        props.setProvince(event.target.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Add by City, State, and Country
                    <input type="text" value={props.city} onChange={handleCityChange}/>
                    <input type="text" value={props.province} onChange={handleProvinceChange}/>
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

export default City