import { AppProps } from "next/app";
import "../src/styles/index.scss";
import Navbar from "../src/components/navbar";
import Footer from "../src/components/footer";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
