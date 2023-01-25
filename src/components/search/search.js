import React from 'react'
import {geocode, weather} from '../api/api'

const Search = ({setValues, values={}}) => {
  
  const handleChange = name => event => {
    setValues({
      ...values, [name]: event.target.value
    })
  }

  const clickSubmit = (e) => {
    e.preventDefault()
    const searchUser = {
      /**nullish coalising for handling objects*/
      city: values?.city,
      country: values?.country
    }
    geocode(searchUser).then((data) => {
      if (data.error) {
      // prevalue is the state b4 u change it and everything to the right will be what it is after the changes
        setValues(preValues => ({ ...preValues, error: data.error}))
      }
      else {
        // setValues(preValues => ({...preValues, error:'', results: [data[0]]})  )
        const lat = data[0].latitude
        const lng = data[0].longitude
        console.log(data)
        weather(lat, lng).then((data) => {
          if (data.error) {
              setValues(preValues => ({ ...preValues, error: data.error}))
            }
          else {
            setValues({error:'', results: [data], searched: true})  
            console.log(data)
          }
        })
      }
    })
  }
  return (
    <div data-testid="py-[1rem] px-[3rem]" className='py-[1rem] px-[3rem]'>
          <form action="#" data-testid="FORM_ID" className="flex justify-between">
            <div><input value={values.city} onChange={handleChange('city')}  type="text" className="focus:outline-none border-b-4 border-dotted border-b-[#ddd]"  placeholder="city" /></div>
            <div><input value={values.country} onChange={handleChange('country')}  type="text" className="focus:outline-none border-b-4 border-dotted border-b-[#ddd]" placeholder="country" /></div>
            <div className="rounded-lg bg-slate-500 text-white p-2 mb-2" >
              <button onClick={clickSubmit}>Submit</button>
              </div>
        </form>

    </div>
  )
}

export {
  Search
}