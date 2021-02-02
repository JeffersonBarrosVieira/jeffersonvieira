import Link from 'next/link';
import Construcao from './construcao';

function Habilidades() {
    return(
        <div id="pagina-inicial">
            
            <header id="topo">
                <div>
                    <a><h1 className="nome">Jefferson Barros</h1></a>
                </div>
            </header>

            <main id="conteudo-pagina-inicial">
                <h1 className="title">
                    JEFFERSON <a href="#conhecer">BARROS</a>
                </h1>
                
                <code className="versao">Versão 1.4</code>

                <p className="descricao">
                    <a href="#conhecer">(: Conheça-me :)</a>
                </p>
    
                <div id="conhecer">
                    <div className="grid">    
                            <div className="card">
                                <h3>Sobre Min</h3>
                                <p>Página em desenvolvimento...</p>
                            </div>
                            <div className="card">
                                <h3>Habilidades</h3>
                                <p>Página em desenvolvimento...</p>
                            </div>
                    </div>
                </div>

                <div className="fundo2">
                    <div className="conteudo-fundo2">
                        <div className="grid">    
                                <div className="card">
                                    <h3>Projetos</h3>
                                    <p>Página em desenvolvimento...</p>
                                </div>
                                <div className="card">
                                    <h3>Vamos Conversar</h3>
                                    <p>Página em desenvolvimento...</p>
                                </div>
                        </div>
                        <a href="#topo"><img src="/img/favicon.ico"/></a>
                    </div>
                </div>
            </main>

            <footer id="rodape-sobre">
                <a href="#" target="_blank" rel="noopener noreferrer">
                    Developed by <h4>: Jefferson Barros Vieira</h4>.
                </a>
            </footer>
        </div>
    )
}

export default Habilidades