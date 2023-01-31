import React, { useState } from "react";
import Bike from "../img/delivery.png";
import heroBg from "../img/heroBg.png";
import { heroData } from "../utils/data";
import { motion } from "framer-motion";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
import { app } from "../firebase.config";

const HomeContainer = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user }, dispatch] = useStateValue();

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
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id="home">
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-4 md:gap-6">
        <div className="flex items-center gap-2 justify-center bg-orange-200 md:px-3 px-2 py-1 rounded-tr-full rounded-br-full">
          <p className="text-base text-orange-600 font-semi-bold">
            Swift Delivery
          </p>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={Bike}
              className="w-full h-full object-contain"
              alt="deliveryBike"
            />
          </div>
        </div>

        <p className="text-[2.5rem] lg:text-[4rem] font-bold tracking-wide text-headingColor text-left">
          The Fastest Delivery in{" "}
          <span className="text-orange-600 text-[3rem] lg:text-[4.5rem]">
            Your City
          </span>
        </p>
        <p className="text-base text-textColor text-left md:w-[80%]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum velit
          fugit quis voluptatem nostrum dolores natus, temporibus, non magni,
          molestias eius vitae praesentium minima illum eligendi cumque. Vel,
          nemo recusandae!
        </p>
        <div className="flex gap-3">
          
          <motion.button
            whileTap={{ scale: 0.75 }}
            type="button"
            className="bg-gradient-to-br from-orange-300 to-orange-500 w-full md:w-auto px-3 py-2 rounded-lg hover:shadow-lg"
          >
            Order Now
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.75 }}
            type="button"
            className="bg-gradient-to-br from-orange-300 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg"
            onClick={login}
          >
            Sign In
          </motion.button>
        </div>
      </div>
      <div className="py-2 flex-1 flex items-center relative">
        <img
          src={heroBg}
          className=" ml-auto h-420 w-full lg:w-auto lg:h-650"
          alt="hero-bg"
        />

        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center  lg:px-24 py-4 gap-4 flex-wrap">
          {heroData &&
            heroData.map((item) => (
              <div
                key={item.id}
                className="lg:w-[160px] p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
              >
                <img
                  src={item.imgSrc}
                  className="w-20 lg:w-40 -mt-10 lg:-mt-20"
                  alt="i1"
                />
                <p className="text-base font-semibold text-textColor mt-1">
                  {item.name}
                </p>
                <p className="text-[12px] text-lighttextGray font-semibold my-1 lg:my-1">
                  {item.descp}
                </p>
                <p className="text-sm font-semibold text-headingColor">
                  <span className="text-xs text-red-600">$</span>
                  {item.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
