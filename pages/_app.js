import "tailwindcss/tailwind.css";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Passage from '@passageidentity/passage-node';

function App({ Component, pageProps, isAuthorized, username }) {
  return (
    <div>
      <div class="space-y-4">
      </div>
      <br></br>
      {isAuthorized ?
        <div>
          <Navbar></Navbar>
          <Component {...pageProps} />
          <Footer></Footer>
        </div> : <div >
          <div className="flex justify-center"><h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-black">Session Expired</h1></div>
          <hr></hr>
          <div className="flex justify-center"> Please proceed to  &nbsp;<a href="/" className="underline">Login</a></div>
        </div>}
    </div>
  );
}

export async function getServerSideProps(context) {
  // getServerSideProps runs server-side only and will never execute on the client browser
  // this allows the safe use of a private Passage API Key
  const passage = new Passage({
    appID: process.env.PASSAGE_APP_ID,
    apiKey: process.env.PASSAGE_API_KEY,
    authStrategy: "HEADER",
  });
  try {
    const authToken = context.req.cookies['psg_auth_token'];
    const req = {
      headers: {
        authorization: `Bearer ${authToken}`,
      },
    };
    const userID = await passage.authenticateRequest(req);
    if (userID) {
      // user is authenticated
      const { email, phone } = await passage.user.get(userID);
      const identifier = email ? email : phone;
      return { props: { isAuthorized: true, username: identifier } };
    }
  } catch (error) {
    // authentication failed
    return { props: { isAuthorized: false, username: '' } };
  }
}

export default App;
