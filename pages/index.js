import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';


function Home(){
    return (
        <div className="pagina-inicial fundo-principal">

            <Head>
                <title>Jefferson Barros</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            
            <header clasName="cabecalho">
                <div>
                    <h1 id="cima"/>
                    <h1 className="nome">Jefferson Barros</h1>
                </div>
            </header>

            <main>
                <h1 className="title">
                    JEFFERSON <a href="#conhecer">BARROS</a>
                </h1>
                
                <code className="code">Versão 1.2</code>

                <p className="descricao">
                    <a href="#conhecer">(: Conheça-me :)</a>
                </p>
    
                <div className="fundo1">
                    <h3 id="conhecer"></h3>
                    <div className="grid">    
                        <Link href="/sobre">
                            <a className="card">
                                <h3>Habilidade</h3>
                                <p>Página em desenvolvimento...</p>
                            </a>
                        </Link>
                        <Link href="/sobre">
                            <a className="card">
                                <h3>Projetos</h3>
                                <p>Página em desenvolvimento...</p>
                            </a>
                        </Link>
                    </div>
                </div>

                <div className="fundo2">
                    <div className="conteudo-fundo2">
                        <div className="grid">    
                            <Link href="/sobre">
                                <a className="card">
                                    <h3>Sobre</h3>
                                    <p>Página em desenvolvimento...</p>
                                </a>
                            </Link>
                            <Link href="/sobre">
                                <a className="card">
                                    <h3>Contato</h3>
                                    <p>Página em desenvolvimento...</p>
                                </a>
                            </Link>
                        </div>
                        <a href="#cima"><img src="/favicon.ico"/></a>
                    </div>
                </div>

            </main>

            <footer>

                <a href="#" target="_blank" rel="noopener noreferrer">
                    Developed by <h4>: Jefferson Barros Vieira</h4>.
                </a>

            </footer>
            
        </div>
        )
}

export default Home