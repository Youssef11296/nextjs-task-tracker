import type { AppProps } from "next/app";
import Layout from "../widgets/Layout";
// styles
import "../shared/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
