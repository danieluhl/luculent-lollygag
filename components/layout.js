import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Toggle from "./toggle";
import classNames from "classnames";
import { useState } from "react";

const name = "Luculent Lollygag";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }) {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const toggleDarkmode = () => {
    setIsDarkMode(!isDarkMode);
  };
  const themeClassNames = classNames(styles.outerContainer, {
    [styles.darkMode]: isDarkMode,
  });
  return (
    <div className={themeClassNames}>
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Blog about software engineering, management, and other interesting thoughts"
          />
          <meta name="og:title" content={siteTitle} />
        </Head>
        <Toggle onDarkmodeToggle={toggleDarkmode} />
        <header className={styles.header}>
          {home ? (
            <>
              <Image
                priority
                src="/images/reyan.png"
                className={utilStyles.borderCircle}
                height={300}
                width={300}
                alt={name}
              />
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </>
          ) : (
            <>
              <Link href="/">
                <a>
                  <Image
                    priority
                    src="/images/pro.png"
                    className={utilStyles.borderCircle}
                    height={108}
                    width={108}
                    alt={name}
                  />
                </a>
              </Link>
              <h2 className={utilStyles.headingLg}>
                <Link href="/">
                  <a className={utilStyles.colorInherit}>{name}</a>
                </Link>
              </h2>
            </>
          )}
        </header>
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
