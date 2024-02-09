import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.sass";
import { Contact } from "@/components/Contact";
import { Nav } from "@/components/Nav";
import { Header } from "@/components/Header";
import { About } from "@/components/About";
import { Construction } from "@/components/Construction";
import { Location } from "@/components/Location";
import { Video } from "@/components/Video";
import { Footer } from "@/components/Footer";
import { Projects } from "@/components/Projects";
import { Process } from "@/components/Process";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Contact/>
        <Nav/>
        <Header/>
        <About/>
        <Construction/>
        <Process/>
        <Projects/>
        <Location/>
        <Video/>
        <Footer/>
      </main>
    </>
  );
}
