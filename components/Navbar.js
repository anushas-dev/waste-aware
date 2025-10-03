
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (



    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <Link href="/" class="flex items-center">
        <Image src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-blue">WasteAware</span>
      </Link>
      <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
        <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium md:flex-row md:space-x-8 md:mt-0 md:border-0">
          <li>
            <Link href="/about" class="block py-2 pl-3 pr-4 bg-gray-700 rounded text-white">About</Link>
          </li>
          <li>
            <Link href="/dashboard" class="block py-2 pl-3 pr-4 bg-gray-700 rounded text-white">Dashboard</Link>
          </li>
        </ul>
      </div>
    </div>

  );

}