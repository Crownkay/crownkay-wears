import React from "react";
import logo from "../img/logo-white.png";
import { motion } from "framer-motion";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";

import {
  MdAdd,
  MdLogout,
  MdShoppingBasket,
  MdOutlineNotes,
  MdArrowDropDown,
} from "react-icons/md";
import Avatar from "../img/avatar.png";
import { Link } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
import { useState } from "react";

const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user, cartShow, cartItems }, dispatch] = useStateValue();

  const [isMenu, setIsMenu] = useState(false);

  const login = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setIsMenu(!isMenu);
    }
  };

  const logout = () => {
    setIsMenu(false);
    localStorage.clear();

    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };

  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };

  return (
    <header className="bg-primary fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16">
      {/* desktop and tablet view */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to={"/"} className="flex items-center gap-1">
          <img src={logo} className="w-10 object-cover" alt="logo" />
          <p className="text-headingColor text-xl font-bold">Crownkay</p>
        </Link>
        <div className="flex items-center gap-8">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-8 "
          >
            <Link to={"/"}>
              <li className="relative text-base text-textColor hover:text-headingColor  hover:before:absolute before:rounded-lg before:content before:w-full before:h-1 before:-bottom-1 before:left-0 before:bg-gradient-to-tr from-orange-300 to-orange-600 transition-all ease-in-out duration-300 cursor-pointer">
                Home
              </li>
            </Link>
            <Link to={"/FoodMenu"}>
              <li className="relative text-base text-textColor hover:text-headingColor  hover:before:absolute before:rounded-lg before:content before:w-full before:h-1 before:-bottom-1 before:left-0 before:bg-gradient-to-tr from-orange-300 to-orange-600 transition-all ease-in-out duration-300 cursor-pointer">
                Menu
              </li>
            </Link>
            <li className="relative text-base text-textColor hover:text-headingColor  hover:before:absolute before:rounded-lg before:content before:w-full before:h-1 before:-bottom-1 before:left-0 before:bg-gradient-to-tr from-orange-300 to-orange-600 transition-all ease-in-out duration-300 cursor-pointer">
              About us
            </li>
            <Link to={"/Blog"}>
              <li className="relative text-base text-textColor hover:text-headingColor  hover:before:absolute before:rounded-lg before:content before:w-full before:h-1 before:-bottom-1 before:left-0 before:bg-gradient-to-tr from-orange-300 to-orange-600 transition-all ease-in-out duration-300 cursor-pointer">
                Blog
              </li>
            </Link>
          </motion.ul>
        </div>
        <div className="flex items-center justify-center gap-4">
          <div
            className="relative flex items-center justify-center cursor-pointer"
            onClick={showCart}
          >
            <MdShoppingBasket className="text-textColor text-2xl cursor" />
            {cartItems && cartItems.length > 0 && (
              <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                <p className="text-xs text-white font-semibold">
                  {cartItems.length}
                </p>
              </div>
            )}
          </div>
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={user ? user.photoURL : Avatar}
            className="w-10 min-w-[40px] h-10 min-h-[40px] object-cover drop-shadow-xl cursor-pointer rounded-full"
            alt="userprofile"
           
          />

          <motion.button
            whileTap={{ scale: 0.75 }}
            type="button"
             onClick={login}
          >
            <MdOutlineNotes className="text-textColor text-3xl" />
          </motion.button>
          <div className="relative">
            {/* put hanbuger here */}
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0"
              >
                {user && user.email === "adekolaadeniran84@gmail.com" && (
                  <Link to="/createItem">
                    <p
                      className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                      onClick={() => setIsMenu(false)}
                    >
                      New Item <MdAdd />
                    </p>
                  </Link>
                )}
                <p
                  className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                  onClick={logout}
                >
                  Logout <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className="flex items-center justify-between md:hidden w-full h-full">
        <Link to={"/"} className="flex items-center gap-1">
          <img src={logo} className="w-10 object-cover" alt="logo" />
          <p className="text-headingColor text-xl font-bold">Crownkay</p>
        </Link>
        <div className="flex items-center justify-center gap-4">
          <div
            className="relative flex items-center justify-center"
            onClick={showCart}
          >
            <MdShoppingBasket className="text-textColor text-3xl cursor-pointer" />
            {cartItems && cartItems.length > 0 && (
              <div className="absolute -top-1 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex  items-center justify-center">
                <p className="text-xs text-white font-semibold">
                  {cartItems.length}
                </p>
              </div>
            )}
          </div>
          <img
            src={user ? user.photoURL : Avatar}
            className="w-10 min-w-[40px] h-10 min-h-[40px] object-cover drop-shadow-xl cursor-pointer rounded-full"
            alt="userprofile"
          />
          <motion.button
            whileTap={{ scale: 0.6 }}
            type="button"
            onClick={login}
          >
            <MdOutlineNotes className="text-textColor text-3xl" />
          </motion.button>
          <div className="relative ml-5">
            {/* put hambuger here */}
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0"
              >
                {user && user.email === "adekolaadeniran84@gmail.com" && (
                  <Link to="/createItem">
                    <p
                      className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                      onClick={() => setIsMenu(false)}
                    >
                      New Item <MdAdd />
                    </p>
                  </Link>
                )}

                <ul className="flex flex-col">
                  <Link to="/">
                    <li
                      className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer px-4 py-2 hover:bg-slate-100"
                      onClick={() => setIsMenu(false)}
                    >
                      Home
                    </li>
                  </Link>
                  <Link to="/FoodMenu">
                    <li
                      className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer px-4 py-2 hover:bg-slate-100"
                      onClick={() => setIsMenu(false)}
                    >
                      Menu
                    </li>
                  </Link>
                  <li
                    className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer px-4 py-2 hover:bg-slate-100"
                    onClick={() => setIsMenu(false)}
                  >
                    About us
                  </li>
                  <Link to="/Blog">
                    <li
                      className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer px-4 py-2 hover:bg-slate-100"
                      onClick={() => setIsMenu(false)}
                    >
                      Blog
                    </li>
                  </Link>
                </ul>

                <p
                  className="m-2 p-2 rounded-md shadow-md flex items-center justify-center gap-3 cursor-pointer bg-gray-200 hover:bg-slate-300 transition-all duration-100 ease-in-out text-textColor text-base"
                  onClick={logout}
                >
                  Logout <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
