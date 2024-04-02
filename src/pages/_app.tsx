import "../styles/globals.sass";
import type { AppProps } from "next/app";
import { Layout } from "../components/Layout"
import NextNProgress from 'nextjs-progressbar';
import { NextIntlClientProvider } from 'next-intl';
import { useRouter } from 'next/router';


const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    <NextIntlClientProvider
      locale={router.locale}
      messages={pageProps.messages}
    >
      <Layout>
        <NextNProgress />
        <Component {...pageProps} />
      </Layout>
    </NextIntlClientProvider>
  );
};

export default MyApp;
