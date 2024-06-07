import { Slider2 } from "../Components/Slider2";

export const Testinomial = () => {
  return (
    <>
      <div className=" h-[450px]  pt-10 pb-14">
        <div className=" flex justify-end items-end text-end mr-5   md:mr-10 ml-5">
          <div className=" w-36">
            <h1 className="text-yellow-400 font-bold text-lg ">
              Happy Kids, Satisfied Parents
            </h1>
          </div>
        </div>
        <div className="flex justify-start mt-5">
          <Slider2 />
        </div>
      </div>
    </>
  );
};
