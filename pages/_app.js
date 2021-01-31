import Router from 'next/router';
import Head from 'next/head';
import '../styles/globals.scss'
import NProgress from 'nprogress';

Router.events.on("routeChangeStart", (url) => {
  NProgress.start();
});

Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Head>
        <title>Jefferson Barros</title>
        <link rel="icon" href="/favicon.ico"/>

      </Head>
    </>
    )
}

export default App
