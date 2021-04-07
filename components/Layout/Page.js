import Head from "next/head";
import { Nav } from "../Navbar/Nav";
import styles from "../../styles/Home.module.css";

export const Page = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="A fullstack software developer portfolio built on Next.js"
        ></meta>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0"
        ></meta>
        <title>Brisibe's Software Developer Portfolio</title>
      </Head>
      <Nav />
      {children}
    </div>
  );
};
