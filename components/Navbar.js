import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (



    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="#" class="flex items-center">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">FoodAware</span>
      </a>
      <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
        <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium md:flex-row md:space-x-8 md:mt-0 md:border-0">
          <li>
            <a href="#" class="block py-2 pl-3 pr-4 bg-gray-700 rounded text-white">Home</a>
          </li>
          <li>
            <a href="#" class="block py-2 pl-3 pr-4 bg-gray-700 rounded text-white">About</a>
          </li>
          <li>
            <a href="#" class="block py-2 pl-3 pr-4 bg-gray-700 rounded text-white">Dashboard</a>
          </li>
        </ul>
      </div>
    </div>

  );
}