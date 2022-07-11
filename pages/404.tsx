import Head from "next/head";
import Router from "next/router";
import { useEffect } from "react";

export default function Custom404() {

  useEffect(() => {
    setTimeout(() =>{
      Router.push("/");
    }, 2000);
  }, []);

  return (
    <div>
      <Head>
        <title>NextJs Basic | 404</title>
      </Head>
      <h1 className="title-not-found">Oops...</h1>
      <h1 className="title-not-found">Halaman yang anda cari tidak ditemukan!</h1>
    </div>
  )
}
