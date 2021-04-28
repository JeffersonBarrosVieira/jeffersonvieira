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
        <link rel="preload" href="/img/minha-foto2.png" as="image"/>
        <link rel="preload" href="/img/folha.png" as="image"/>
        <link rel="preload" href="/img/engrenagem.png" as="image"/>
        <link rel="preload" href="/img/floresta.png" as="image"/>
        <link rel="preload" href="/img/astronomia.png" as="image"/>
        <link rel="preload" href="/img/arvore.jpg" as="image"/>

        <link rel="preload" href="/img/card/Fundo.png" as="image"/>
        <link rel="preload" href="/img/card/Amarela_baixo.png" as="image"/>
        <link rel="preload" href="/img/card/Amarela_direita.png" as="image"/>
        <link rel="preload" href="/img/card/Amarela_esquerda.png" as="image"/>
        <link rel="preload" href="/img/card/Branca.png" as="image"/>

        <link rel="preload" href="/img/card/icones/docencia.png" as="image"/>
        <link rel="preload" href="/img/card/icones/mecanico.png" as="image"/>
        <link rel="preload" href="/img/card/icones/matematica.png" as="image"/>
        <link rel="preload" href="/img/card/icones/web.png" as="image"/>

        <link rel="preload" href="/estilo/_animacoes.scss" as="style"/>
        <link rel="preload" href="/estilo/_pagina-inicial.scss" as="style"/>
        <link rel="preload" href="/estilo/_sobre.scss" as="style"/>
        <link rel="preload" href="/estilo/_habilidades.scss" as="style"/>
        <link rel="preload" href="/estilo/_projetos.scss" as="style"/>

        <link rel="stylesheet" href="/estilo/_animacoes.scss"/>
        <link rel="stylesheet" href="/estilo/_pagina-inicial.scss"/>
        <link rel="stylesheet" href="/estilo/_sobre.scss"/>
        <link rel="stylesheet" href="/estilo/_projetos.scss"/>
        <link rel="stylesheet" href="/estilo/_habilidades.scss"/>
      </Head>
    </>
    )
}

export default App
