import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Search } from '../components/search/search'
import { geocode } from '../features/search/geocode'
import { weather} from '../features/search/weather'

export default function SearchContainer({setValues, values={}}) {
  const [loading, setLoading] = useState(false)


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
      // setStorage(geoData)
  }
  // eslint-disable-next-line
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

  const prevSearch = (e) => {
    setLoading(true)
    const data_1 = e.currentTarget.textContent.split(", ");
    const searchUser = {
      /**nullish coalising for handling objects*/
      city: data_1[0],
      country: data_1[1]
    }
    dispatch(geocode(searchUser))
    
  }
  return (
    <>
    <Search clickSubmit={clickSubmit} setValues={setValues} values={values} loading={loading} prevSearch={prevSearch}/>
    </>
  )
}

