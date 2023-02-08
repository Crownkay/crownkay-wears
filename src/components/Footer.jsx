import React from "react";
import { MdFacebook, MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../img/logo-white.png";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="w-full border-b border-gray-300 my-5"></div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <Link to={"/"} className="md:hidden flex flex-col md:flex-row items-center">
          <img src={logo} className="w-20 md:w-10 object-cover" alt="logo" />
          <p className="text-headingColor text-xl font-bold">Crownkay</p>
        </Link>
        <ul className="flex flex-col md:flex-row items-center text-base text-headingColor gap-3">
          <li className="">Contact Us</li>
          <li className="">Privacy Policy</li>
          <li className="">About Us</li>
          <li className="">Terms of service</li>
        </ul>
        <div className="flex gap-2">
          <p
            className="flex text-sm border border-orange-600 text-orange-600 rounded-md p-2 cursor-pointer "
          >
            Sign-in with Google
          </p>
          <p
            className="flex items-center justify-center gap-1 text-sm border border-orange-600 text-orange-600 rounded-md p-2 cursor-pointer"
          >
            Logout <MdLogout />
          </p>
        </div>
      </div>
      <div className="w-full border-b border-gray-300 mt-5"></div>
      <div className="flex flex-col gap-2 items-center mt-5">
        <p>2023 Crownkay</p>
        <div className="flex items-center gap-3">
          <MdFacebook className="text-3xl" />
          <MdFacebook className="text-3xl" />
          <MdFacebook className="text-3xl" />
          <MdFacebook className="text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
