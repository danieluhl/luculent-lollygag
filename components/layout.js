import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import darkTheme from '../styles/theme-dark.module.css';
import lightTheme from '../styles/theme-light.module.css';
import Link from 'next/link';
import Toggle from './toggle';
import { useState, useEffect } from 'react';

const name = 'Luculent Lollygag';
export const siteTitle = 'Reyan Blog';

const THEMES = {
  DARK: 'dark',
  LIGHT: 'light',
};

const STORAGE_THEME_KEY = 'theme';

const THEMES_MAP = {
  [THEMES.DARK]: darkTheme,
  [THEMES.LIGHT]: lightTheme,
};

export default function Layout({ children, home }) {
  const [theme, setTheme] = useState(THEMES.LIGHT);

  const updateTheme = () => {
    const newTheme = theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
    setTheme(newTheme);
    window.localStorage.setItem(STORAGE_THEME_KEY, newTheme);
  };

  useEffect(() => {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
      .matches
      ? THEMES.DARK
      : THEMES.LIGHT;
    // check local storage to initialize state
    const savedIsDarkMode =
      window.localStorage.getItem(STORAGE_THEME_KEY) || systemTheme;
    setTheme(savedIsDarkMode);
  }, []);

  const themeStyles = THEMES_MAP[theme];

  return (
    <div className={themeStyles.themeWrapper}>
      <div className={`${styles.container}`}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Blog about software engineering, management, and other interesting thoughts"
          />
          <meta name="og:title" content={siteTitle} />
        </Head>
        <Toggle
          onDarkmodeToggle={updateTheme}
          isDarkMode={theme === THEMES.DARK}
        />
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
              <p className={utilStyles.lightText}>A blog by Dan Uhl</p>
            </>
          ) : (
            <>
              <Link href="/">
                <a>
                  <Image
                    priority
                    src="/images/scene.jpeg"
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
        <main>{children({ theme: themeStyles })}</main>
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
