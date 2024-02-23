import "../styles/globals.sass";
import type { AppProps } from "next/app";
import { Layout } from "../components/Layout"
import NextNProgress from 'nextjs-progressbar';


const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <NextNProgress />
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
