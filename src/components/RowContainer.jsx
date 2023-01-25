import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { MdShoppingBasket } from "react-icons/md";
import NotFound from "../img/NotFound.svg";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

function RowContainer({ flag, data, scrollValue }) {
  const rowContainer = useRef();

  const [items, setItems] = useState([])
  const [{ cartItems }, dispatch] = useStateValue();

  const addToCart = () => {
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: items,
    });
    localStorage.setItem("cartItems", JSON.stringify(items));
  };

  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);

  useEffect(()=>{
    addToCart()
  },[items])

  return (
    <div
      ref={rowContainer}
      className={`w-full flex items-center gap-4 scroll-smooth ${
        flag
          ? "overflow-x-scroll scrollbar-none"
          : "overflow-x-hidden flex-wrap justify-center"
      }`}
    >
      {data && data.length > 0 ? (
        data.map((item) => (
          <div
            key={item.id}
            className="w-250 h-[175px] min-w-[250px] md:min-w-[300px] md:w-300 bg-cardOverlay rounded-lg p-2 md:p-3 mt-6 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative overflow-hidden"
          >
            <div className="w-full flex items-center">
              <div className=" flex flex-col justify-between">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="w-20 h-20 md:w-28 object-contain"
                >
                  <img
                    src={item?.imageURL}
                    alt={item.title}
                    className="w-full h-full object-contain"
                  />
                </motion.div>
                <motion.div
                  whileTap={{ scale: 0.75 }}
                  className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md"
                  onClick={() => setItems( [...cartItems, item])}
                >
                  <MdShoppingBasket className="text-white text-sm" />
                </motion.div>
              </div>

              <div className="w-full flex flex-col items-end justify-end">
                <p className="text-textColor font-semibold text-sm md:text-lg">
                  {item.title}
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  {item.calories} Calories
                </p>
                <div className="flex items-center gap-8">
                  <p className="text-sm md:text-lg text-headingColor font-semibold">
                    <span className="text-sm text-red-500">$</span>
                    {item.price}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="w-full flex flex-col items-center justify-center">
          <img src={NotFound} alt="Not available" className="h-340" />
          <p className="text-xl text-headingColor font-semibold">
            Items not Available
          </p>
        </div>
      )}
    </div>
  );
}

export default RowContainer;
