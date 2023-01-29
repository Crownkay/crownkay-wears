import React from 'react'
import {MdFacebook,} from "react-icons/md"

const Footer = () => {
  return (
    <div className='w-full'>
    <div className="w-full border-b border-gray-300 my-2"></div>
    <div className="flex justify-between mt-5">
      <ul className="flex items-center justify-center text-sm ">
        <li className="pr-5">Home</li>
        <li className="pr-5">Menu</li>
        <li className="pr-5">About</li>
        <li className="">Blog</li>
      </ul>
      <div className="flex items-center">
        <MdFacebook className='text-sm' />
        <MdFacebook className='text-sm' />
        <MdFacebook className='text-sm' />
        <MdFacebook className='text-sm' />
      </div>
      <div className="flex items-center justify-between">
        <button type='button' className='text-sm border rounded-md p-2 cursor-pointer '>Sign-in with Google</button>
        <button type='button' className='text-sm border rounded-md p-2 cursor-pointer'>Logout</button>
      </div>
    </div>
    </div>
  )
}

export default Footer