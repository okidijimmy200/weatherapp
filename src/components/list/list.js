import React from 'react'

export default function List() {
  return (
    <div>
        <div className='flex flex-row p-1 mb-2'>
            <div className='basis-1/2 border-b-4 border-dotted border-b-[#ddd] mr-10 p-2'>High/Low</div>
            <div className='basis-1/2 border-b-4 border-dotted border-b-[#ddd] p-2'>wind</div>
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
  )
}
