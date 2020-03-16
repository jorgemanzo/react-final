import React from 'react'
import { countries } from '../api/Data'
import '../styles/Zip.css'

const Zip = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault()
        const newLocations = [...props.locations]
        newLocations.unshift({ zipCode : props.zipCode, country: props.country })
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
        <div className="zipContent">
            <form className="zipForm" onSubmit={handleSubmit}>
                <div>
                    <select className="select" value={props.country} onChange={handleCountriesSelectChange}>
                        {countries.map((country, index) => (
                            <Choices key={index} value={country.value} label={country.label} />
                        ))}
                    </select>
                    <br/>
                    <div>
                        <label>
                            ZipCode &nbsp;
                            <input className="zip" type="text" value={props.zipCode} onChange={handleChange} />
                        </label>
                        <input className="button" type="submit" value="Submit" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Zip