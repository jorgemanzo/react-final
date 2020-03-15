import React, { useState } from 'react'
import Location from './Location'
import Zip from './components/Zip'

const Main = (props) => {
  const [zipCode, setZipCode] = useState('97361')
  const [city, setCity] = useState('Monmoutj')
  const [state, setState] = useState('Oregon')
  const [country, setCountry] = useState('us')
  const removeLocation = (childIndex) => {
    const newLocations = props.locations.filter((location, index) => index !== childIndex)
    props.setLocations(newLocations)
  }
  return (
    <div>
      <Zip 
        country={country} 
        setCountry={setCountry} 
        zipCode={zipCode} 
        setZipCode={setZipCode}
        locations={props.locations}
        setLocations={props.setLocations}
        />
      <div>
        {
          props.locations.length > 0 ?
          props.locations.map((location, index) => (
            <Location key={index} index={index} location={location} country={country} removeLocation={removeLocation} />
          )) : 
          <div></div>
        }
      </div>
    </div>
  )
}

export default Main
