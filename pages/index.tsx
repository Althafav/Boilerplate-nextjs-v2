import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container ">
        <div className="row">
          <div className="my-card vh-100">
            <p className="heading1">Home Body here</p>
          </div>
        </div>

        <div className="row">
          <div className="col-12">

          </div>
        </div>
      </div>

    </>
  );
}
