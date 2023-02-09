import React, {useState} from 'react'
import Display from '../components/display/display'
import List from '../components/list/list'
import SearchContainer from './searchContainer'

export default function Page() {
    const [values, setValues] = useState({
        city: '',
        country: ''
      })
  return (
    <div>
        <SearchContainer setValues={setValues} values={values} />        
        <Display values={values} />
        <List values={values} />
    </div>
  )
}
