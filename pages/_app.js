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
        <link rel="shortcut icon" href="#" />

        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital@0;1&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

        <link rel="icon" href="/img/icones/icone-32x32.png"/>
        <link rel="preload" href="/img/minha-foto2.png" as="image"/>
        <link rel="preload" href="/img/folha.png" as="image"/>
        <link rel="preload" href="/img/engrenagem.png" as="image"/>
        <link rel="preload" href="/img/floresta.png" as="image"/>
        <link rel="preload" href="/img/astronomia.png" as="image"/>
        <link rel="preload" href="/img/arvore.jpg" as="image"/>

        <link rel="preload" href="/img/matematica.gif" as="image"/>
        <link rel="preload" href="/img/docente.gif" as="image"/>
        <link rel="preload" href="/img/computador.gif" as="image"/>
        <link rel="preload" href="/img/robo.gif" as="image"/>

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
