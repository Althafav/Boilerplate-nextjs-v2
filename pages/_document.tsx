import HeaderComponent from "@/components/HeaderComponent";
import ScriptsComponents from "@/components/ScriptsComponents";
import Globals from "@/modules/Globals";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <HeaderComponent />
      </Head>
      <body>
        <Main />
        <NextScript>
          <ScriptsComponents/>
        </NextScript>
      </body>
    </Html>
  );
}
