import queryString from 'query-string'

// search for geo cordinates
const geocode = async (params) => {
    const query = queryString.stringify(params)
    try {
        const response = await fetch('https://api.api-ninjas.com/v1/geocoding?'+ query, {
            method: 'GET',
            headers: {
                'X-Api-Key': '2TNwbSyjYDag5xWp3mwfILneLF5s4BoG6rHwjdTn'
              }
        })
        return await response.json()
    }
    catch (e) {
        console.log(e)
    }
}

// search for weather details
const weather = async (lat, lng) => {
    const key = '1e1a761fdbe7016952e7f5b99a629bea'
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${key}`, {
            method: 'GET'
        })
        return await response.json()
    }
    catch (e) {
        console.log(e)
    }
}
export {
    geocode,
    weather
}