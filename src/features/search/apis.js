import axios from "axios";
import queryString from 'query-string'

const API_URL = 'https://api.api-ninjas.com/v1/geocoding?'

const geolocation = async(params) => {
    const query = queryString.stringify(params)
    try {
        const response = await axios.get(API_URL+ query,  {
            headers: {
                'X-Api-Key': '2TNwbSyjYDag5xWp3mwfILneLF5s4BoG6rHwjdTn'
              }
        })

        if (response.data) {
            // let localCart = localStorage.getItem('data')
            // let temp = []
            // if (localCart !== null) {
            // temp = [...JSON.parse(localCart)]
            // }
            // temp.push([response.data[0].name, response.data[0].state])
            // localStorage.setItem('data', JSON.stringify(temp));
            // console.log(response.data)
            return response.data
        }
    }
    catch (e) {
        console.log(e)
    }
}

const weatherapi = async (lat, lng) => {
    const key = '1e1a761fdbe7016952e7f5b99a629bea'
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${key}`)
        if (response.data) {
            // no  need to store weather results in localstorage
            localStorage.setItem('weather', JSON.stringify(response.data))

            return response.data
        }
    }
    catch (e) {
        console.log(e)
    }
}

export {
    geolocation,
    weatherapi
}