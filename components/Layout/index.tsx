import Head from "next/head";
import { ReactNode } from "react";
import Footer from "../Footer";
import Header from "../Header";
import styles from "./Layout.module.css";

interface LayoutProps {
  children: ReactNode;
  pageTitle: string;
}

export default function Layout(props: LayoutProps) {
  let {children, pageTitle} = props;
  pageTitle = `NextJs Basic | ${pageTitle}`;
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="My website nextjs basic with typescript mode" />
      </Head>
      <div className={styles.container}>
          <Header />
        <div className={styles.content}>
            {children}
        </div>
          <Footer />
      </div>
    </>
  )
}
