import React from "react";

const EducateCard = ({ grade, benefits }) => {
  return (
    <div className="flex flex-col bg-white rounded-3xl w-[400px] h-[600px] space-y-3">
      <div className="flex flex-col flex-grow p-6 sm:p-10">
        <div className="grid items-center justify-center w-full grid-cols-1 text-left">
          <div>
            <h2 className="text-h5 font-medium tracking-tighter text-gray-600 lg:text-3xl">
              {grade}
            </h2>
            <p className="mt-2 text-sm text-gray-500 text-h6">
              <ul>
                {benefits.map((benefit, index) => (
                  <li key={index}>- {benefit}</li>
                ))}
              </ul>
            </p>
          </div>
        </div>
      </div>
      <div className="px-6 pb-8 sm:px-8 mt-auto">
        <a
          aria-describedby="tier-company"
          className="flex items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
          href="#"
        >
          Register
        </a>
      </div>
    </div>
  );
};

export default EducateCard;
