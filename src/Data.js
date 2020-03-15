export const countries = [
    { value:'us', label:'🇺🇲️ USA' },
    { value:'ca', label:'️🇨🇦️ CA' },
]
const apiToken = `d82c23c84605675bfb22f0195f73574a`
export const newLocation = (zipCode, state, country) => ({
    zipCode: zipCode,
    state: state,
    country: country
})

export const getDataByZipCodeAndCountry = async (zipCode, country, setData) => {
    console.log('API CALL  ==============')
    const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${zipCode},${country}&appid=${apiToken}`)
    const data = await result.json()
    setData(data)
    console.log(data)
}
