import React from 'react'
import { TbTemperatureCelsius } from 'react-icons/tb'
import {useSelector} from 'react-redux'

export default function List() {
  const {results, isSuccess} = useSelector((state) => state.weather)
  return (
    <>
    {isSuccess ?
     <div>
      <div >
     <div className='flex flex-row p-1 mb-2'>
         <div className='basis-1/2 border-b-4 border-dotted border-b-[#ddd] mr-10 p-2 flex'>
          <div className='mr-[3rem]'>High/Low</div>
          <div className='flex'>
          <div>{Math.floor(results.main.temp_max - 273.15)}/{Math.floor(results.main.temp_min- 273.15)}</div>
          <div><TbTemperatureCelsius style={{verticalAlign: 'text-bottom'}} /></div></div>
          </div>
         <div className='basis-1/2 border-b-4 border-dotted border-b-[#ddd] p-2 flex'>
           <div className='mr-[8rem]'>wind</div>
            <div>{results.wind.speed} Km/hr</div>

         </div>
     </div>
     <div className='flex flex-row p-1 mb-2'>
         <div className='basis-1/2 border-b-4 border-dotted border-b-[#ddd] mr-10 p-2 flex'>
         <div className='mr-[3rem]'>Humidity</div>
            <div>{results.main.humidity} %</div>
            </div>
         <div className='basis-1/2 border-b-4 border-dotted border-b-[#ddd] p-2 flex'>
         <div className='mr-[3rem]'>Wind Direction</div>
            <div>{results.wind.deg} deg</div>
            </div>
     </div>
     <div className='flex flex-row p-1 mb-2'>
         <div className='basis-1/2 border-b-4 border-dotted border-b-[#ddd] mr-10 p-2 flex'>
         <div className='mr-[3rem]'>Pressure</div>
            <div>{results.main.pressure} hPa</div>
            </div>
         <div className='basis-1/2 border-b-4 border-dotted border-b-[#ddd] p-2 flex'>
         <div className='mr-[3rem]'>Sunrise</div>
            <div>{new Date(results.sys.sunrise * 1000).toLocaleTimeString()}</div>
        </div>
     </div>
     <div className='flex flex-row p-1 mb-2'>
         <div className='basis-1/2 border-b-4 border-dotted border-b-[#ddd] mr-10 p-2 flex'>
         <div className='mr-[3rem]'>Visibility</div>
            <div>{results.visibility / 1000} Km</div>
            </div>
         <div className='basis-1/2 border-b-4 border-dotted border-b-[#ddd] p-2 flex'>
         <div className='mr-[3rem]'>Sunset</div>
            <div>{new Date(results.sys.sunset * 1000).toLocaleTimeString()}</div>
            </div>
     </div>
     </div>
 </div>
    :  <div>
        <div className='flex flex-row p-1 mb-2'>
            <div className='basis-1/2 border-b-4 border-dotted border-b-[#ddd] mr-10 p-2'>High/Low</div>
            <div className='basis-1/2 border-b-4 border-dotted border-b-[#ddd] p-2 flex'>
              <div className='mr-[8rem]'>wind</div>
            </div>
        </div>
        <div className='flex flex-row p-1 mb-2'>
            <div className='basis-1/2 border-b-4 border-dotted border-b-[#ddd] mr-10 p-2'>Humidity</div>
            <div className='basis-1/2 border-b-4 border-dotted border-b-[#ddd] p-2'>Wind Direction</div>
        </div>
        <div className='flex flex-row p-1 mb-2'>
            <div className='basis-1/2 border-b-4 border-dotted border-b-[#ddd] mr-10 p-2'>Pressure</div>
            <div className='basis-1/2 border-b-4 border-dotted border-b-[#ddd] p-2'>Sunrise</div>
        </div>
        <div className='flex flex-row p-1 mb-2'>
            <div className='basis-1/2 border-b-4 border-dotted border-b-[#ddd] mr-10 p-2'>Visibility</div>
            <div className='basis-1/2 border-b-4 border-dotted border-b-[#ddd] p-2'>Sunset</div>
        </div>
    </div>}
    </>
    
  )
}
