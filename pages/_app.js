import "../styles/global.css";

export default function App({ Component, pageProps }) {
  console.log(Component);
  return <Component {...pageProps} />;
}
