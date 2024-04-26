import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import FbLogin from "./Components/FbLogin";

function App() {

  return (
    <>
      <div className='bg-white sm:bg-[#F0F2F5] md:bg-[#F0F2F5] xl:bg-[#F0F2F5] lg:bg-[#F0F2F5] 2xl:bg-[#F0F2F5] '>
        <FbLogin/>
      </div>
      
    </>
  )
}

export default App
