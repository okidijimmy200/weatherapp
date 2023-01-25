import React, {useState} from 'react'
import Display from '../components/display/display'
import List from '../components/list/list'
import {Search} from '../components/search/search'

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
        <Display values={values} />
        <List values={values} />
    </div>
  )
}
