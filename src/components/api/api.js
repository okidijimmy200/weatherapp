import queryString from 'query-string'

const search = async (params) => {
    const query = queryString.stringify(params)
    try {
        const response = await fetch('https://api.api-ninjas.com/v1/geocoding?'+ query, {
            method: 'GET',
            headers: {
                'X-Api-Key': '8Aieoiv435t5iZZQsfr1xBB167mTlgcnvzecJQah'
              }
        })
        return await response.json()
    }
    catch (e) {
        console.log(e)
    }
}

export {
    search
}