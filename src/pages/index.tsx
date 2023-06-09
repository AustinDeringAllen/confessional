import { type NextPage } from "next";
import Head from "next/head";
import ConfessionForm from "../components/ConfessionForm";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Create T3 App</title>
          <meta name="description" content="Generated by create-t3-app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="flex min-h-screen flex-col items-center justify-center bg-[#070606]">
          <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
              Confessional
            </h1>

            <p className="text-2xl text-white"></p>

            <ConfessionForm />
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Home;
