

import './App.css'

import React, { useEffect, useState } from 'react'
import ProgressBar from './components/ProgressBar'

export default function App() {
  const [value, setValue] = useState(0);
  useEffect(()=>{
    setInterval(() => {
      setValue((val)=>val+1);
    }, 100);
  },[])
  return (
    <div className='app'>
      <span>Progress Bar</span>
      <ProgressBar value={value}/>
    </div>
  )
}
