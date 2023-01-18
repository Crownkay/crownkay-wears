import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { MdShoppingBasket } from "react-icons/md";

function RowContainer({ flag, data, scrollValue }) {
  const rowContainer = useRef();
  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);

  return (
    <div
      ref={rowContainer}
      className={`w-full flex items-center gap-3 scroll-smooth ${
        flag
          ? "overflow-x-scroll scrollbar-none"
          : "overflow-x-hidden flex-wrap"
      }`}
    >
      {data &&
        data.map((item) => (
          <div
            key={item.id}
            className="w-250 h-[175px] min-w-[250px] md:min-w-[300px] md:w-300 bg-cardOverlay rounded-lg p-2 md:p-3 my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative"
          >
            <div className="w-full h-[80px] flex items-center justify-between">
              <motion.img
                whileHover={{ scale: 1.2 }}
                src={item.imageURL}
                alt={item.title}
                className="w-20 md:w-28 object-contain"
              />
              <motion.div
                whileTap={{ scale: 0.75 }}
                className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md"
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
        ))}
    </div>
  );
}

export default RowContainer;
