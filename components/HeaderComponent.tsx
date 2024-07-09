import Globals from "@/modules/Globals";
import Head from "next/head";
import React from "react";


export default function HeaderComponent() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        crossOrigin="anonymous"
      />
      <link
        href={`${Globals.BASE_URL}assets/css/owl.carousel.min.css`}
        rel="stylesheet"
        media="all"
      />
      <link
        href={`${Globals.BASE_URL}assets/css/main.min.css`}
        rel="stylesheet"
        media="all"
      />
    </>
  );
}