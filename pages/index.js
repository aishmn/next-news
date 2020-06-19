import Head from "next/head";
import Header from "../components/core/header/Header";
import MainLayout from "../components/core/layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <div className="container">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1>Hello</h1>
      </div>
    </MainLayout>
  );
}
