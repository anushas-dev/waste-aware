import "tailwindcss/tailwind.css";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { SessionProvider } from "next-auth/react";

function App({ Component, pageProps, isAuthorized, username }) {
  return (
    <SessionProvider session={pageProps.session}>
      <div>
        <div className="space-y-4">
        </div>
        <br></br>
        <div>
          <Navbar></Navbar>
          <Component {...pageProps} />
          <Footer></Footer>
        </div>
      </div>
    </SessionProvider>
  );
}

// Intentionally no getServerSideProps in _app; per Next.js, use page-level data fetching

export default App;
