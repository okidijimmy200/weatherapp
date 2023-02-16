import React from 'react'
import ButtonContainer from '../../container/buttonContainer'

const Search = ({clickSubmit, setValues, values, loading, prevSearch}) => {

    const handleChange = name => event => {
      setValues({
        ...values, [name]: event.target.value
      })
    }
 
  return (
    <div data-testid="search_form" className='py-[1rem] px-[3rem]'>
          <form action="#" data-testid="FORM_ID" className="flex justify-between">
            <div><input value={values.city || ''} onChange={handleChange('city')}  type="text" className="focus:outline-none border-b-4 border-dotted border-b-[#ddd]"  placeholder="city"/></div>
            <div><input value={values.country || ''} onChange={handleChange('country')}  type="text" className="focus:outline-none border-b-4 border-dotted border-b-[#ddd]" placeholder="country" /></div>
            <div className="rounded-lg bg-slate-500 text-white p-2 mb-2" >
              <button onClick={clickSubmit} disabled={loading}>Search</button>
              </div>
        </form>
        <ButtonContainer prevSearch={prevSearch}/>
        
      {loading ? 
    <div>Loading..... </div> : ''
    }
    </div>
  )
}

export {
  Search
}