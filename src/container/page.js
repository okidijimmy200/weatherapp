import React, {useState, useEffect} from 'react'
import Display from '../components/display/display'
import Search from '../components/search/search'

export default function Page() {
    const [values, setValues] = useState({
        city: '',
        country: '',
        results: [],
        searched: false
      })
  return (
    <div>
        <Search setValues={setValues} values={values} />
        <Display values={values}/>
    </div>
  )
}
