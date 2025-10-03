import "tailwindcss/tailwind.css";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { SessionProvider } from 'next-auth/react'

function App({ Component, pageProps }) {
	return (
		<SessionProvider session={pageProps.session}>
			<div>
				<div class="space-y-4">
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

export default App;
