import type {NextPage} from 'next';
import Hero from 'components/utils/hero';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nouns</title>
      </Head>
      <Hero />
      <div className="temporalContent">
        <h2>
          Scores are based on NFT trading activity on OpenSea, SuperRare, Foundation, Rarible and the CryptoPunks contract.
        </h2>
        <h3>
          Built by NiftyTable
        </h3>
      </div>
      <style jsx>{`
        .temporalContent {
          display: grid;
          place-items: center;
          padding: 48px;
        }
      `}</style>
    </>
  );
};

export default Home;
