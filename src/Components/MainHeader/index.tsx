import React from "react";
import hr from "../../assets/hr.jpg";

export const MainHeader = () => {
  return (
    <div className="ml-40 top-0 left-0 flex items-center space-x-4 relative ">
      <img
        src={hr}
        alt="Sample Image"
        className="rounded-lg  h-[100px] w-[100px] object-fill"
      />
      <h1 className="text-4xl my-6 p-4 uppercase text-blue-900 font-bold text-center tracking-wide font-sans">
        HR Dashboard
      </h1>

      <nav className="flex items-center space-x-6 justify-between ml-auto mr-30 font-serif">
        <ul className="flex  space-x-6 text-md"></ul>
      </nav>
    </div>
  );
};
