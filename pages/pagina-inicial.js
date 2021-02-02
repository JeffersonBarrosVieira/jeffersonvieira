import React, {useState} from 'react';
import Link from 'next/link';

import Sobre from './conheca-me/sobre'

const PaginaInicial = () => {
    let conteudo = [<Sobre/>, "", "", ""];
    const[Conteudo, AlterarConteudo] = useState(conteudo[3]);

    return(
        <div id="pagina-inicial">
            
            <header id="topo">
                <div>
                <a><h1 className="nome">Jefferson Barros</h1></a>
                    <div className="menu">
                        <a href="#conhecer" className="card-menu" onClick={ () => AlterarConteudo(conteudo[0]) }>
                            <h3>Sobre</h3>
                        </a>
                        <a href="#conhecer" className="card-menu" onClick={ () => AlterarConteudo(conteudo[1]) }>
                            <h3>Habilidades</h3>
                        </a>
                        <a href="#conhecer" className="card-menu" onClick={ () => AlterarConteudo(conteudo[2]) }>
                            <h3>Projetos</h3>
                        </a>
                        <a href="#conhecer" className="card-menu" onClick={ () => AlterarConteudo(conteudo[3]) }>
                            <h3>Contato</h3>
                        </a>
                    </div>
                </div>
            </header>

            <main id="inicio">
                <h1 className="title">
                    JEFFERSON <a href="#conhecer">BARROS</a>
                </h1>
                
                <code className="versao">Versão 1.6</code>

                <p className="descricao">
                    <a href="#conhecer">(: Conheça-me :)</a>
                </p>
    
                <div id="conhecer" >
                    <div className="grid">    

                        <a className="card" onClick={ () => AlterarConteudo(conteudo[0]) }>
                            <h3>Bloco em construção...</h3>
                        </a>

                    </div>
                </div>

                {Conteudo}

                <div className="fundo2">
                    <div className="conteudo-fundo2">
                        <div className="grid">    
                            <a className="card">
                                <h3>Bloco em construção...</h3>
                            </a>
                        </div>
                        <a href="#inicio" onClick={ () => AlterarConteudo("") }><img src="/img/favicon.ico"/></a>
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