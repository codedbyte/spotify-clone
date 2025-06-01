import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <>
        <div className="w-full flex font-semibold justify-between items-center">
            <div className="flex items-center gap-2">
                <img src={assets.arrow_left} alt="" className="w-8 rounded-2xl bg-black p-2 cursor-pointer" />
                <img src={assets.arrow_right} alt="" className="w-8 rounded-2xl bg-black p-2 cursor-pointer" />
            </div>
            <div className="flex items-center gap-4">
                <p className='bg-white text-black rounded-2xl text-[15px] px-4 py-1 hidden md:block cursor-pointer'>Explore Premium</p>
                <p className="bg-black text-white rounded-2xl py-1 px-3">Install App</p>
                <p className="flex items-center bg-purple-500 text-black w-7 h-7 rounded-full justify-center">D</p>
            </div>
        </div>
        <div className="flex items-center gap-2 mt-4">
            <p className="text-black bg-white px-4 py-1 rounded-2xl cursor-pointer">All</p>
            <p className="bg-black px-4 py-1 rounded-2xl text-white cursor-pointer">Music</p>
            <p className="bg-black px-4 py-1 rounded-2xl text-white cursor-pointer">Podcasts</p>
        </div>
    </>
  )
}

export default Navbar
