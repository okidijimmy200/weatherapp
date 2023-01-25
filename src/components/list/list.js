import React from 'react'
import { TbTemperatureCelsius } from 'react-icons/tb'

export default function List({values}) {
  return (
    <>
    {values.searched ?
     <div>
      {values.results.map((item, i) => {
       return <div key={i}>
     <div className='flex flex-row p-1 mb-2'>
         <div className='basis-1/2 border-b-4 border-dotted border-b-[#ddd] mr-10 p-2 flex'>
          <div className='mr-[3rem]'>High/Low</div>
          <div className='flex'>
          <div>{Math.floor(item.main.temp_max - 273.15)}/{Math.floor(item.main.temp_min- 273.15)}</div>
          <div><TbTemperatureCelsius style={{verticalAlign: 'text-bottom'}} /></div></div>
          </div>
         <div className='basis-1/2 border-b-4 border-dotted border-b-[#ddd] p-2 flex'>
           <div className='mr-[8rem]'>wind</div>
            <div>{item.wind.speed} Km/hr</div>

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
     </div>
      })}
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
