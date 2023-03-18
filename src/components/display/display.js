import React from 'react'
import { WiDegrees } from 'react-icons/wi'
import { FaCloudsmith } from 'react-icons/fa'
import {useSelector} from 'react-redux'


export default function Display() {
  const {results, isSuccess} = useSelector((state) => state.weather)
  console.log(results)
  
  const current = new Date();
  const time = current.toLocaleTimeString("en-US");
  return (
    <>
    {isSuccess ? 
        <div className='py-2 px-4 bg-slate-300 rounded-lg'>
             <div >
              <div>           
                      <h2>{results.name}, {results.sys.country}. Weather</h2>
                      <p>As of {time}  {results.weather.main}</p>
                  </div>
                  {results.weather.map((val, i) => {
                  return <div key={i}>
                      <div className='py-4 px-8 text-7xl text-center'>
                        
                            {Math.floor(results.main.temp - 273)}<WiDegrees  style={{display: 'inline', verticalAlign: 'text-bottom', fontSize: "1.2em", marginLeft: '-34px'}} />
                              <FaCloudsmith style={{ fontSize: "0.6em",display: 'inline', verticalAlign: 'text-top'}}/> <span className='text-sm'>{val.main}</span>
                        
                      </div>
                  <div>
                      <h2>{val.description}</h2>
                  </div>
                  </div>
                  })}
                   </div>
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


// display is the component to test, pass in the provider and you can pass in initial state
// render(<Provider store={mockStore}>
//     <Display {...params}/>
// </Provider>)

//
// https://reactjs.org/docs/thinking-in-react.html
//