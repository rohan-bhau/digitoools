import { ShoppingCart } from 'lucide-react';
import React from 'react'

const Navbar = ({cartCount, setCartCount}) => {
  return (
    <div className="  bg-base-100 shadow-sm fixed top-0 z-10 w-full">
      <div className="flex justify-between items-center container mx-auto py-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className=" menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-32 p-2 shadow"
            >
              <li className="hover:text-orange-500">
                <a href="">Products</a>
              </li>
              <li className="hover:text-orange-500">
                <a href="">Features</a>
              </li>
              <li className="hover:text-orange-500">
                <a href="">Pricing</a>
              </li>
              <li className="hover:text-orange-500">
                <a href="">Testimonials</a>
              </li>
              <li className="hover:text-orange-500">
                <a href="">FAQ</a>
              </li>
            </ul>
          </div>
          <a
            href="./"
            className="text-2xl font-bold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent"
          >
            DigiTools
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" menu-horizontal gap-8 px-1">
            <li className="hover:text-orange-500">
              <a href="">Products</a>
            </li>
            <li className="hover:text-orange-500">
              <a href="">Features</a>
            </li>
            <li className="hover:text-orange-500">
              <a href="">Pricing</a>
            </li>
            <li className="hover:text-orange-500">
              <a href="">Testimonials</a>
            </li>
            <li className="hover:text-orange-500">
              <a href="">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-4">
          <div className='relative'>
            <ShoppingCart className="cursor-pointer hover:text-orange-400" /> <p className={`${cartCount === 0? "hidden":""} absolute -top-3 left-3 bg-red-500 p-1 h-4 w-4 text-xs flex items-center justify-center mx-auto rounded-full`}>{ cartCount}</p>
          </div>
          <button className="hover:text-orange-500 cursor-pointer">
            Log In
          </button>
          <a className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white cursor-pointer">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar
