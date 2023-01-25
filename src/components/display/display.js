import React from 'react'
import { WiDegrees } from 'react-icons/wi'
import { FaCloudsmith } from 'react-icons/fa'

export default function Display({values}) {
  console.log(values.results)
  const current = new Date();
  const time = current.toLocaleTimeString("en-US");
  return (
    <>
    {values.searched ? 
        <div className='py-2 px-4 bg-slate-300 rounded-lg'>
          {values.results.map((item, i) => {
             return <div key={i}>
              <div>           
                      <h2>{item.name}, {item.sys.country}. Weather</h2>
                      <p>As of {time}  {item.weather.main}</p>
                  </div>
                  {item.weather.map((val, i) => {
                  return <div key={i}>
                      <div className='py-4 px-8 text-7xl text-center'>
                        
                            {Math.floor(item.main.temp - 273.15)}<WiDegrees  style={{display: 'inline', verticalAlign: 'text-bottom', fontSize: "1.2em", marginLeft: '-34px'}} />
                              <FaCloudsmith style={{ fontSize: "0.6em",display: 'inline', verticalAlign: 'text-top'}}/> <span className='text-sm'>{val.main}</span>
                        
                      </div>
                  <div>
                      <h2>{val.description}</h2>
                  </div>
                  </div>
                  })}
                   </div>
                   })}
              </div>
    : 
    <div className='py-2 px-4 bg-slate-300 rounded-lg'>
    <div>

        <h2>City In. Weather</h2>
          <p>Time</p>
      </div>
          <div className='py-4 px-8 text-7xl text-center'>
              24 
          </div>
      <div>
          <h2>Overcast clouds</h2>
      </div>
  </div>
    }
   
    </>
  )
}
