import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "../components/Header";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>G-ecom</title>
        <meta name="description" content="ecommerce" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </div>
  );
};

export default Home;
