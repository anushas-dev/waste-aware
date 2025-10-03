import { useEffect } from 'react';


export default function Home({ appID }) {
  useEffect(() => {
    require('@passageidentity/passage-elements/passage-auth');
  }, []);

  return (
    <>
      <passage-auth app-id={appID}></passage-auth>
    </>
  )
}

export async function getStaticProps() {
  const appID = process.env.NEXT_PUBLIC_PASSAGE_APP_ID || null; // Using null as fallback
  return {
    props: {
      appID
    }
  };
}