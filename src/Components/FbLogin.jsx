import React from 'react';
import FbImage from '../assets/facebook.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileScreen } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


export default function FbLogin() {
  return (
    <div className="container sm:flex md:flex sm:py-24 sm:ml-9 md:py-24 md:ml-9  / lg:flex lg:py-56 lg:ml-24   / xl:flex xl:py-40 xl:pl-10 xl:pb-56 ">
      <div className="leftc  ">
        <div className='flex bg-[#FFFBE2] p-3 md:hidden sm:hidden lg:hidden xl:hidden 2xl:hidden items-center '>
          <FontAwesomeIcon icon={faMobileScreen} className='text-2xl ' />
          <p className='text-sm ml-1 font-[Lucida sans] text-[#3b5998]'>Get Facebook for Android and browse faster.</p>
        </div>
        <div className='flex sm:flex md:flex flex-col justify-start space-x-0 sm:-ml-2  md:-ml-2 / lg:flex lg:ml-8 / xl:flex xl:-ml-2  '>
          <img src={FbImage} alt="Facebook Login" className='w-28   mx-auto sm:pt-8 sm:w-[75%]  sm:-ml-5  md:pt-8 md:w-80  md:-ml-5 /  lg:w-[55%]  lg:-ml-8 lg:font-semibold / xl:pt-8 xl:w-96   / ' />
          <p className='hidden sm:block sm:w-11/12 sm:text-xl sm:-mt-2 md:block md:w-11/12 md:text-lg md:-mt-2 /  lg:block lg:text-wrap lg:text-3xl 
          lg:-mt-2 / xl:block xl:w-5/6 xl:text-4xl xl:font-normal xl:-mt-4 lg:pr-4 '>Facebook helps you connect and share with the people in your life.</p>
        </div>
      </div>

      <div className="right flex flex-col  m-3 space-y-2 sm:bg-white   sm:p-4 sm:rounded-md sm:-mr-8  sm:-mt-3  sm:shadow-gray-300 sm:border sm:border-1  sm:shadow-md  sm:relative   / md:bg-white   md:p-4 md:rounded-md md:-mr-8  md:-mt-3  md:shadow-gray-300 md:border md:border-1  md:shadow-md  md:relative / lg:bg-white   lg:p-8 lg:rounded-md lg:shadow-gray-300 lg:border lg:border-1  lg:shadow-md  lg:-mt-16 xl:bg-white   xl:p-4 xl:rounded-md xl:mr-44  xl:-mt-3  xl:shadow-gray-300 xl:border xl:border-1  xl:shadow-md  xl:relativeg:relative xl:space-y-3 xl:text-xl">

        <input type="text" placeholder='Email address or phone number ' className='bg-gray-50 p-[10px] sm:pr-20 md:pr-20  / lg:pr-36 / xl:pr-40  rounded-[4px] border-1 border placeholder:text-slate-500  placeholder:text-sm  outline-offset-1 md:py-[6px]  md:bg-white  outline-blue-300 lg:py-[16px] lg:p-[20px] / xl:py-4 xl:placeholder:text-xl xl:placeholder:w-fit xl:p-[10px] ' />
        <input type="password " placeholder='Password ' className='bg-gray-50 p-[10px]  rounded-[4px] border-1 border  placeholder:text-slate-500  placeholder:text-sm  outline-offset-1 sm:py-[6px] sm:bg-white  outline-blue-300 md:py-[6px] md:bg-white   / lg:py-[16px] xl:py-4 xl:placeholder:text-xl xl:placeholder:w-fit  ' />
        <button className='bg-blue-600 text-white p-2 rounded-[4px] hover:bg-blue-700 text-[17px]   font-sans font-bold sm:py-[6px] sm:mt-10 sm:text-sm  md:py-[6px] md:mt-10 md:text-sm / lg:py-[16px] lg:mt-10 lg:text-sm  / xl:py-4 xl:mt-10 xl:text-2xl  '> Log in</button>
        <span className='text-blue-500 text-sm mx-auto hover:underline py-1 font-sans sm:text-[12px] sm:font-semibold md:text-[12px] md:font-semibold  / lg:text-[12px] lg:font-semibold  / xl:text-sm xl:font-semibold '>Forgotten  password?</span>
        <div className='flex items-center justify-around my-1'>

          <hr className='w-full mr-3 bg-gray-300 mb-3 ' /> <span className='sm:hidden md:hidden lg:hidden xl:hidden'>or</span> <hr className='w-full ml-3 bg-gray-300 sm:hidden md:hidden lg:hidden xl:hidden' />
        </div>
        
        <button className=' w-fit px-2 mx-auto  text-gray-900 py-1 rounded-[4px]  border border-1 border-gray-300    font-sans font-semibold active:bg-green-400 active:border-t-[2px] active:border-t-green-600  sm:bg-[#42b72a] sm:active:bg-green-500 sm: sm:text-white sm:text-[14px] sm:py-2 sm:px-3 /  md:bg-[#42b72a] md:active:bg-green-500 md:text-white md:text-[14px] md:py-2 md:px-3 /  lg:bg-[#42b72a] lg:active:bg-green-500 lg:text-white lg:text-[17px] lg:py-2 lg:px-6 /  xl:bg-[#42b72a] xl:active:bg-green-500 xl:text-white xl:text-lg xl:py-2 xl:px-3  '> Create new account</button>
        <span className='sm:text-[10px] sm:absolute sm:-bottom-10 sm:mx-6 hidden sm:block  / md:text-[10px] md:absolute md:-bottom-10 md:mx-6 md:block  lg:block lg:absolute   lg:text-[15px] lg:mx-1 xl:ml-10'> <span className="sm:text-gray-900 font-semibold sm:hover:underline  / md:text-gray-900 md:font-semibold md:hover:underline  / lg:py-[16px]lg:text-gray-900 lg:font-semibold lg:hover:underline /   xl:text-gray-900 xl:font-semibold xl:hover:underline    ">Create a Page </span> for a celebrity, brand or business.</span>

      </div>
      <div className=' sm:hidden md:hidden lg:hidden xl:hidden'>

        <div  className='text-xs flex flex-row items-center space-x-28 mt-28 justify-center -ml-6'>
          <div>
              <span className='font-sans font-bold text-gray-400  '>English (UK)</span>
            <ul className=' flex flex-col items-center text-[#3b5998] space-y-1'>
              <li >اردو</li>
              <li >తెలుగు</li>
              <li >தமிழ்</li>
            </ul>
          </div>
          <div>
          <ul className=' flex flex-col items-center text-[#3b5998] space-y-1  '>
              <li>ಕನ್ನಡ</li>
              <li>मराठी</li>
              <li>हिन्दी</li>
              <FontAwesomeIcon icon={faPlus} className='border border-1 border-[#3b5998] p-1 rounded-[3px] text-sx' />
            </ul>
          </div>
        </div>
        <div className="fotter text-[11px] text-gray-500 pt-2 ">
          <ul className='flex space-x-1 items-center justify-center '>
            <li className="x1">About</li>
            <span aria-hidden="true"> · </span>
            <li className="x2">Help</li>
            <span aria-hidden="true"> · </span>
            <li className="x3">More</li>
          </ul>
        </div>
        <div className='text-xs text-gray-600 pt-2 flex items-center justify-center '>

          <h3 className=''>Meta © 2024</h3>
        </div>

      </div>
    </div>

  )
}
