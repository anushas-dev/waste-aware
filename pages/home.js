import { useEffect } from 'react';
import Link from 'next/link';
import Passage from '@passageidentity/passage-node';

export default function Home() {

  return (
    <div style={{
      backgroundImage: `url("https://images.pexels.com/photos/4997810/pexels-photo-4997810.jpeg")`,
      height: '80vh',
      backgroundRepeat: 'repeat',
      backgroundSize: 'cover',
    }}>
      <div className="text-center">
        <div className="flex flex-wrap" style={{
          justifyContent: 'center'
        }}>
          <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Enormous quantities</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">Approximately one-third of all food produced globally is wasted, amounting to about 1.3 billion metric tons per year. This includes both food loss (occurring during production, post-harvest, and processing stages) and food waste (occurring at the consumption stage).</p>
          </a>
          <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Hunger and poverty</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">Food wastage exacerbates issues of hunger and poverty. With enough food being wasted to feed the entire population of hungry people in the world, reducing food waste could play a significant role in alleviating hunger.</p>
          </a>
          <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Supply chain inefficiencies</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">Food waste occurs throughout the supply chain, including during harvesting, transportation, processing, and retail. Inadequate infrastructure, lack of storage facilities, and improper handling practices contribute to these inefficiencies.</p>
          </a>
          <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Nutritional implications</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">.Food wastage not only represents a loss of calories but also a loss of essential nutrients. When edible food is discarded, it means missed opportunities to provide proper nutrition to those in need.</p>
          </a>
          <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Collective efforts</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">Addressing food wastage requires collaborative efforts involving governments, businesses, and individuals. Implementing policies and regulations, raising awareness, improving infrastructure, and promoting sustainable consumption habits are crucial steps towards reducing food waste globally.</p>
          </a>
          <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Social responsibility</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">Reducing food waste is a matter of social responsibility. Food waste implies wasting the resources used in its production, including water, energy, and labor. By minimizing food wastage, we can make more efficient use of these resources and reduce the strain on the environment.</p>
          </a>

        </div>
      </div>

      <br></br>
      <div className="text-center">
        <Link href="/options" className="h-10 px-6 font-semibold rounded-md bg-gray-700 text-white" type="submit">
          Explore Options
        </Link>
      </div>
    </div>
  )
};

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