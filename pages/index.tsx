import type { NextPage } from 'next';
import Head from 'next/head';
import { Header } from '../components/Header/Header';
import { MenuContextProvider } from '../context/MenuContextProvider';

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>G-ecom</title>
                <meta name="description" content="ecommerce" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MenuContextProvider>
                <Header />
            </MenuContextProvider>
        </div>
    );
};

export default Home;
