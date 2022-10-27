import type { NextPage } from 'next';
import Head from 'next/head';
import CardSlider from '../components/card-slider/CardSlider';
import Card from '../components/card/Card';
import Layout from '../components/layout/Layout';
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
                <Layout>
                    <CardSlider />
                    <Card />
                </Layout>
            </MenuContextProvider>
        </div>
    );
};

export default Home;
