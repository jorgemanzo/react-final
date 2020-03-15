export const countries = [
    { value:'us', label:'🇺🇲️ USA' },
    { value:'ca', label:'️🇨🇦️ CA' },
]
// const apiToken = `d82c23c84605675bfb22f0195f73574a`
const apiToken = `aldskjf;dsaljf`
export const getDataByZipCodeAndCountry = async (zipCode, country, setData) => {
    console.log('API CALL  ==============')
    console.log('by zip:', zipCode)
    const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${zipCode},${country}&appid=${apiToken}`)
    const data = await result.json()
    setData(data)
    console.log(data)
}

export const getDataByCityAndCountryAndState = async (city, state, country, setData) => {
    console.log('API CALL  ==============')
    console.log('by city:', city)
    const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&appid=${apiToken}`)
    const data = await result.json()
    setData(data)
    console.log(data)
}