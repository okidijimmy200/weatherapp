import React from 'react'
import {useSelector} from 'react-redux'
import Display from '../components/display/display';

export default function DisplayContainer() {
    const {results, isSuccess} = useSelector((state) => state.weather)
    const current = new Date();
    const time = current.toLocaleTimeString("en-US");
  return (
    <>
    <Display results={results} time={time} isSuccess={isSuccess}/>
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