import React from 'react'

export default function ButtonContainer({prevSearch}) {
    const geoData = JSON.parse(localStorage.getItem('data'))
    const setDups = new Set()
  return (
    <div>
                {geoData  ? 
        <div>
           <p>Previous search results</p>
           {/* use set to remove duplicate values, sorting should be most recent */}
           {geoData.filter(item => {
              const duplicate = setDups.has(item.name);
            setDups.add(item.name)
          return !duplicate
          }).slice(0, 3).map((item, i) => {
            console.log(item)
            return <div key={i}>
              <div className="rounded-lg bg-slate-500 text-white p-2 mb-2 cursor-pointer" >
              <button onClick={prevSearch}>{item.name}, {item.country}</button>
              </div>
              
            </div>
          })}
          </div> : ''}
    </div>
  )
}
