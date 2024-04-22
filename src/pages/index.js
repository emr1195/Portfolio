import Head from "next/head";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Generate by crate next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout></Layout>
      </main>
    </>
  );
}
