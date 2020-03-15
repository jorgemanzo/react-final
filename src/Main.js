import React, { useState } from 'react'
import Location from './Location'
import Zip from './components/Zip'
import City from './components/City'

const Main = (props) => {
  const [view, setView] = useState(1)
  const [zipCode, setZipCode] = useState('97361')
  const [city, setCity] = useState('Monmouth')
  const [province, setProvince] = useState('Oregon')
  const [country, setCountry] = useState('us')
  const removeLocation = (childIndex) => {
    const newLocations = props.locations.filter((_, index) => index !== childIndex)
    props.setLocations(newLocations)
  }
  const showZipView = () => {
    setView(1)
  }
  const showCityView = () => {
    setView(2)
  }
  console.log('Locations ----------')
  console.log(props.locations)
  return (
    <div>
      <button onClick={showZipView}>ZipCode, Country</button>
      <button onClick={showCityView}>City, State, Country</button>
      {
        view === 1 ?
          <Zip
            country={country}
            setCountry={setCountry}
            zipCode={zipCode}
            setZipCode={setZipCode}
            locations={props.locations}
            setLocations={props.setLocations}
          /> :
          <div></div>
      }
      {
        view === 2 ?
        <City 
            city={city}
            setCity={setCity}
            province={province}
            setProvince={setProvince}
            country={country}
            setCountry={setCountry}
            locations={props.locations}
            setLocations={props.setLocations}
        /> :
        <div></div>
      }
      <div>
        {
          props.locations.length > 0 ?
            props.locations.map((loc, index) => (
              <Location key={index} index={index} location={loc} removeLocation={removeLocation} />
            )) :
            <div></div>
        }
      </div>
    </div>
  )
}

export default Main
