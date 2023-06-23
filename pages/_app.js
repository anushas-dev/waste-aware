import "tailwindcss/tailwind.css";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Client, Account } from "appwrite";
import UserLogin from "../components/Login";
import { headers } from "next/dist/client/components/headers";


async function componentDidMount () {
  const headers = { "Content-Type": "application/json", "X-Appwrite-Project": 'process.env.NEXT_APPWRITE_PROECT', "X-Appwrite-Key": 'process.env.NEXT_APPWRITE_API_KEY' }
  try {
    const res = await fetch(`https://cloud.appwrite.io/v1`, headers);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};


function App({ Component, pageProps }) {

  return (
    <div>

      <div class="space-y-4">
      </div>

      <br></br>
      <Navbar class="bg-white border-gray-100 dark:bg-gray-900 dark:border-gray-700"></Navbar>
      <Component {...pageProps} />

      <Footer class="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600"></Footer>
    </div>
  );
}
export default App;
