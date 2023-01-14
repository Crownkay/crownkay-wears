import React from "react";
import {motion} from "framer-motion"
import { MdShoppingBasket } from "react-icons/md";

function RowContainer({ flag }) {
  return (
    <div
      className={`w-full my-32 ${
        flag ? "overflow-x-scroll" : "overflow-x-hidden"
      }`}
    >
      <div className="w-300 md:w-340 h-auto bg-gray-100 rounded-lg p-2 my-12 backdrop-blur-lg drop-shadow-lg">
        <div className="w-full flex items-center justify-center">
           <motion.img whileHover={{scale: 1.2}} src="https://firebasestorage.googleapis.com/v0/b/food-app-b51d1.appspot.com/o/Images%2F1673567519071-f9.png?alt=media&token=d30bbb57-e03c-4c60-aada-4cd9a9160ba3"  alt="" className="w-40 -mt-4" 
          />
          <motion.div whileTap={{scale: 0.75}} className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md">
            <MdShoppingBasket className="text-white text-base"/>
          </motion.div>
        </div>
        <div className="w-full flex flex-col items-end justify-end">
          <p className="text-textColor font-semibold text-base md:text-lg">Chocolate & Vanilla</p>
          <p className="mt-1 text-sm text-gray-500">45 Caloires</p>
          <div className="flex items-center gap-8">
            <p className="text-lg text-headingColor font-semibold">
              <span className="text-sm text-red-500">$</span>2.25
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RowContainer;
