import type {NextPage} from 'next';
import Hero from 'components/utils/hero';
import Head from 'next/head';
import { NFTFullPage } from "@zoralabs/nft-components";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nouns</title>
      </Head>
      <NFTFullPage id="5730" />;
      
    </>
  );
};

export default Home;
