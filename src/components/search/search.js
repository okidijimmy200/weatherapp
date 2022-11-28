import React, { useEffect} from 'react'
import {search} from '../api/api'

export default function Search({setValues, values}) {

  const handleChange = name => event => {
    setValues({
      ...values, [name]: event.target.value
    })
  }

  const clickSubmit = (e) => {
    e.preventDefault()
    const searchUser = {
      city: values.city || undefined,
      country: values.country || undefined
    }
    search(searchUser).then((data) => {
      if (data.error) {
      // prevalue is the state b4 u change it and everything to the right will be what it is after the changes
        setValues(preValues => ({ ...preValues, error: data.error}))
      }
      else {
        setValues(preValues => ({...preValues, error:'', results: data})  )
        console.log(data)
      }
    })
  }
  return (
    <div data-testid="py-[1rem] px-[3rem]" className='py-[1rem] px-[3rem]'>
          <form action="#" data-testid="flex justify-between" className="flex justify-between">
            <div><input value={values.city} onChange={handleChange('city')}  type="text" className="focus:outline-none border-b-4 border-dotted border-b-[#ddd]"  placeholder="city" /></div>
            <div><input value={values.country} onChange={handleChange('country')}  type="text" className="focus:outline-none border-b-4 border-dotted border-b-[#ddd]" placeholder="country" /></div>
            <div className="rounded-lg bg-slate-500 text-white p-2 mb-2" onClick={clickSubmit}><button> Submit</button></div>
        </form>

    </div>
  )
}
