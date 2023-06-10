import "tailwindcss/tailwind.css";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function App({ Component, pageProps }) {
  return (
    <div>

      <div class="space-y-4">
      </div>

      <br></br>
      <Navbar class="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700"></Navbar>
      <Component {...pageProps} />

      <Footer class="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600"></Footer>
    </div>
  );
}

export default App;