import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Search } from '../components/search/search'
import { geocode } from '../features/search/geocode'
import { weather} from '../features/search/weather'

export default function SearchContainer({setValues, values={}}) {
  const [loading, setLoading] = useState(false)
  const [storage, setStorage] = useState([])

  const dispatch = useDispatch()

  const {geocodeValue} = useSelector(
    (state) => state.geocode
  )

  useEffect(() => {
    if (geocodeValue && geocodeValue.length>0) {
      const data = [geocodeValue[0]]
      const cords = {
        lat: data[0].latitude,
        lng: data[0].longitude
      }
  
      dispatch(weather(cords))
      setLoading(false)
      setValues(preValues =>({...preValues, city: '', country: ''}))
  }
  }, [dispatch, geocodeValue, setValues])

  const clickSubmit = (e) => {
    setLoading(true)
    e.preventDefault()

    const searchUser = {
      /**nullish coalising for handling objects*/
      city: values?.city,
      country: values?.country
    }

    dispatch(geocode(searchUser))
  }
  return (
    <>
    <Search clickSubmit={clickSubmit} setValues values={values} storage={storage} loading={loading}/>
    </>
  )
}

