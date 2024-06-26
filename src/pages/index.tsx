import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.sass";
import { Contact } from "../components/Contact";
import { Nav } from "../components/Nav";
import { Header } from "../components/Header";
import { About } from "../components/About";
import { Construction } from "../components/Construction";
import { Location } from "../components/Location";
import { Video } from "../components/Video";
import { Footer } from "../components/Footer";
import { Process } from "../components/Process";
import {Projects} from "../components/Projects";
import { Clients } from "../components/Clients";
import { ProjectsLogo } from "../components/ProjectsLogo";
import type { NextPage, GetStaticProps } from "next";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Kardise</title>
        <meta name="description" content="Kardise Company Official web site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/img/logoseo.png" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
         <Header/>
        <About/>
        <Construction/>
        {/* <Process/> */}
        <ProjectsLogo/>
        {/* <Projects/> */}
        <Clients/>
        {/* <Location/> */}
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  };
};