import { useState } from "react";
import { MdOutlineArrowDropDown, MdMenu, MdClose } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 flex items-center h-24 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-8 md:px-12 lg:px-16 xl:px-20 max-w-[1920px]">
        {/* Left Part */}
        <div className="flex items-center">
          <div className="mr-8 py-4 transition-all duration-300 ease-in-out">
            <img
              src="https://superio-appdir.vercel.app/images/logo.svg"
              alt="Logo"
              className="w-32 md:w-40 h-auto"
            />
          </div>

          <ul className="hidden lg:flex items-center space-x-6 lg:space-x-8 whitespace-nowrap">
            {["Home", "Find Jobs", "Employers", "Candidates", "Blog", "Pages"].map((item) => (
              <li key={item} className="flex items-center text-gray-800 hover:text-blue-600 transition duration-300">
                {item}
                <MdOutlineArrowDropDown className="ml-1 text-lg" />
              </li>
            ))}
          </ul>
        </div>
        {/* Right Part */}
        <div className="flex items-center space-x-6 lg:space-x-8 whitespace-nowrap">
          <li className="list-none hidden md:block text-gray-800 hover:text-blue-600 transition duration-300">
            Upload your CV
          </li>

          <div className="hidden md:flex items-center space-x-4">
            <li className="list-none flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-700 hover:text-[#ffffff] transition duration-300">
              Login / Register
            </li>
            <li className="list-none flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
              Post Job
            </li>
          </div>

          <button className="md:hidden text-2xl text-gray-800" onClick={toggleMenu}>
            <MdMenu />
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 flex flex-col p-8 w-1/2 h-full transition-transform transform">
          <button className="absolute top-4 right-4 bg-gray-200 p-2 rounded-full text-xl" onClick={toggleMenu}>
            <MdClose />
          </button>
          <ul className="flex flex-col items-start space-y-6 w-full mt-8">
            {["Home", "Find Jobs", "Employers", "Candidates", "Blog", "Pages"].map((item) => (
              <li key={item} className="flex items-center justify-between w-full text-gray-800 hover:text-blue-600 transition duration-300">
                {item}
                <MdOutlineArrowDropDown className="text-lg" />
              </li>
            ))}
            <li className="list-none text-gray-800 hover:text-blue-600 transition duration-300">
              Upload your CV
            </li>
            <li className="list-none flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-700 hover:text-[#ffffff] transition duration-300 w-full justify-center">
              Login / Register
            </li>
            <li className="list-none flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 w-full justify-center">
              Post Job
            </li>
            <li className="list-none text-gray-800 mt-6">
              <div>
                <p>Phone: (123) 456-7890</p>
                <p>Address: 123 Main St, Anytown, USA</p>
              </div>
            </li>
            <li className="list-none text-gray-800 flex space-x-4 mt-4">
              <a href="#" className="hover:text-blue-600 transition duration-300">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-blue-600 transition duration-300">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-blue-600 transition duration-300">
                <FaLinkedinIn />
              </a>
              <a href="#" className="hover:text-blue-600 transition duration-300">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
