import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (



    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="/" className="flex items-center">
        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-blue">WasteAware</span>
      </a>
      <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:flex-row md:space-x-8 md:mt-0 md:border-0">
          <li>
            <a href="/about" className="block py-2 pl-3 pr-4 bg-gray-700 rounded text-white">About</a>
          </li>
          <li>
            <a href="/dashboard" className="block py-2 pl-3 pr-4 bg-gray-700 rounded text-white">Dashboard</a>
          </li>
        </ul>
      </div>
    </div>

  );
}