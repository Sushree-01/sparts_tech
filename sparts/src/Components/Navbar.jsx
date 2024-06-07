import { RxHamburgerMenu } from "react-icons/rx";

export const Navbar = () => {
  return (
    <div>
      <nav className=" h-16   md:flex justify-end items-end text-white  bg-sky-400">
        <div className=" md:flex justify-end items-end gap-10 mr-10 mb-3 text-white text-lg ">
          <button type="button" className="hover:text-blue-800 transition-colors duration-300">Our Customers</button>
          <button type="button" className="hover:text-blue-800 transition-colors duration-300">SpArts Advantage</button>
          <button type="button" className="hover:text-blue-800 transition-colors duration-300">Contact Us</button>
        </div>
        <div className="md:hidden flex justify-end items-center mr-10">
          <RxHamburgerMenu className=" my-5 text-3xl" />
        </div>
      </nav>
    </div>
  );
};
