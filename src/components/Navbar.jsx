import React, {useState} from "react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 drop-shadow-lg">
      <div className="px-6 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">Crownkay</h1>
          <ul className="hidden md:flex">
            <li>Home</li>
            <li>About</li>
            <li>Blog</li>
            <li>Portfolio</li>
          </ul>
        </div>
        <div className="hidden md:flex">
          <button className="border-none bg-transparent text-black mr-4">
            Login
          </button>
          <button className="px-6 py-2">Sign Up</button>
        </div>
        <div className="md:hidden" onClick={handleClick}>
          {!nav ? <Bars3Icon className="w-5" /> : <XMarkIcon className="w-5"/>}
        </div>
      </div>

      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
        <li className="border-b-2 border-zinc-300 w-full">Home</li>
        <li className="border-b-2 border-zinc-300 w-full">About</li>
        <li className="border-b-2 border-zinc-300 w-full">Blog</li>
        <li className="border-b-2 border-zinc-300 w-full">Portfolio</li>
        <div className="flex flex-col my-4">
          <button className="bg-transparent text-indigo-600 hover:text-indigo-400 px-6 py-3 mb-4">Login</button>
          <button className="px-6 py-3">Sign Up</button>
        </div>

      </ul>
    </div>
  );
};

export default Navbar;
