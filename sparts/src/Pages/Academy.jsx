// import React from 'react'
import { Slide1 } from "../Components/Slide1";

export const Academy = () => {
  return (
    <>
      <div className=" h-[500px] bg-sky-400 pt-10 pb-5 ">
        <div className="w-36 ml-3 flex justify-start md:ml-[65px]  ">
          <h1 className="text-white font-bold text-lg animation">
            Explore Our Top Academies
          </h1>
        </div>
        <div className="flex justify-start mt-5">
          <Slide1 />
        </div>
      </div>
    </>
  );
};
