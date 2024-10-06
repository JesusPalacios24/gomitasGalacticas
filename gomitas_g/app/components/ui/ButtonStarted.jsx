import React from 'react'

import { FaArrowRightLong } from "react-icons/fa6";

function ButtonStarted() {
  return (
    <div>
      <button className="bg-white text-black py-3 px-9 rounded-full font-semibold hover:bg-black hover:text-white">Get started <FaArrowRightLong className="inline mb-1 ml-3"/></button>
    </div>
  )
}

export default ButtonStarted
