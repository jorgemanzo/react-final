import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Location from '../components/Location'
import Zip from '../components/Zip'
import City from '../components/City'
import Remove from '../components/Remove'
import '../styles/Main.css'

const checkForUrlParams = (params, props, removed) => {
  if(!params.zipCode) {
    return
  }
  console.log(params)
  let shouldAdd = false
  for (let i = 0; i < props.locations.length; i++) {
    console.log('compare')
    console.log(props.locations[i].zipCode)
    console.log(params.zipCode)
    console.log(props.locations[i].zipCode === params.zipCode)
    if(props.locations[i].zipCode === params.zipCode) {
      shouldAdd = false
    }
  }
  if (props.locations.length === 0) {
    shouldAdd = true
  }
  if (removed) { 
    shouldAdd = false
  }
  console.log("should add?:", shouldAdd)
  if (shouldAdd) {
    const newLocations = [...props.locations]
    newLocations.unshift({ zipCode: params.zipCode, country: params.country })
    props.setLocations(newLocations)
  }
}

const Main = (props) => {
  const params = useParams()
  const [removed, setRemoved] = useState(false)
  checkForUrlParams(params, props, removed)
  const [view, setView] = useState(1)
  const [zipCode, setZipCode] = useState('97361')
  const [city, setCity] = useState('Monmouth')
  const [province, setProvince] = useState('Oregon')
  const [country, setCountry] = useState('US')
  const removeLocation = (childIndex) => {
    setRemoved(true)
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
      <button className="buttons" onClick={showZipView}>ZipCode, Country</button>
      <button className="buttons" onClick={showCityView}>City, State, Country</button>
      <div className="forms">
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
      </div>
      <Remove removing={props.removing} setRemoving={props.setRemoving}/>
      <div className="locationsContainer">
        {
          props.locations.length > 0 ?
            props.locations.map((loc, index) => (
              <Location key={index} removing={props.removing} index={index} allowRefresh={props.allowRefresh} location={loc} removeLocation={removeLocation} />
            )) :
            <div></div>
        }
      </div>
    </div>
  )
}

export default Main
