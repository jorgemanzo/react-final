import React from 'react'
import { countries } from '../api/Data'
import "../styles/City.css"
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
        <div className="box">
            <form className="cityForm" onSubmit={handleSubmit}>
                <select className="select" value={props.country} onChange={handleCountriesSelectChange}>
                    {countries.map((country, index) => (
                        <Choices key={index} value={country.value} label={country.label} />
                    ))}
                </select>
                <br/>
                <div>
                    <label>
                        City
                    <input className="input" type="text" value={props.city} onChange={handleCityChange} />
                    </label>
                </div>
                <br />
                <div>
                    <label>
                        State/Province
                        <input className="input" type="text" value={props.province} onChange={handleProvinceChange} />
                    </label>
                </div>
                <br />
                <input className="button" type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default City