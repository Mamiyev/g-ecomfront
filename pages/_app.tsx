import type { AppProps } from 'next/app';
import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';
import Layout from '../components/layout/Layout';
import { MenuContextProvider } from '../context/MenuContextProvider';
import Head from 'next/head';
import '../styles/index.css';

export type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);

    return (
        <>
            <Head>
                <title>G-ecom</title>
                <meta name="description" content="ecommerce" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MenuContextProvider>{getLayout(<Component {...pageProps} />)}</MenuContextProvider>
        </>
    );
}

export default MyApp;
