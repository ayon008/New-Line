import Main from "@/Layout/Main";
import "@/styles/globals.css";
import { AnimatePresence } from "motion/react";
import Head from "next/head";
import { useRouter } from "next/router";

export const siteName = 'Self Maid Cleaning Solutions'

export default function App({ Component, pageProps }) {
  const router = useRouter().asPath;
  return (
    <>
      <Head>
        <title>Home | {siteName}</title>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Main>
        <AnimatePresence mode="wait">
          <Component key={router} {...pageProps} />
        </AnimatePresence>
      </Main>
    </>
  );
}
