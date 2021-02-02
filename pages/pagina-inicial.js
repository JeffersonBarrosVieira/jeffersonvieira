import React, {useState} from 'react';
import Link from 'next/link';

import Sobre from './conheca-me/sobre'

const PaginaInicial = () => {
    let conteudo = [<Sobre/>];
    const[Conteudo, AlterarConteudo] = useState("");

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
    
                <div id="conhecer" >
                    <div className="grid">    

                        <a href="#sobre" className="card" onClick={ () => AlterarConteudo(conteudo[0]) }>
                            <h3>Sobre Min</h3>
                            <p>Página em desenvolvimento...</p>
                        </a>

                        <a className="card" onClick={ () => AlterarConteudo("") }>
                            <h3>Habilidades</h3>
                            <p>Página em desenvolvimento...</p>
                        </a>
                        
                    </div>
                </div>

                {Conteudo}

                <div className="fundo2">
                    <div className="conteudo-fundo2">
                        <div className="grid">    
                            <Link href="/conheca-me/projetos">
                                <a className="card">
                                    <h3>Projetos</h3>
                                    <p>Página em desenvolvimento...</p>
                                </a>
                            </Link>
                            <Link href="/conheca-me/contato">
                                <a className="card">
                                    <h3>Vamos Conversar</h3>
                                    <p>Página em desenvolvimento...</p>
                                </a>
                            </Link>
                        </div>
                        <a href="#topo"><img src="/img/favicon.ico"/></a>
                    </div>
                </div>
            </main>

            <footer id="rodape-inicial">
                <a href="#" target="_blank" rel="noopener noreferrer">
                    Developed by <h4>: Jefferson Barros Vieira</h4>.
                </a>
            </footer>
            
        </div>
    )
}

export default PaginaInicial