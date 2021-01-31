import Link from 'next/link';

function Sobre() {
    return(
        <div id="pagina-sobre">
            
            <header id="cabecalho">
                <Link href="/">
                    <h1 className="nome">Jefferson Barros</h1>
                </Link>
            </header>

            <main id="conteudo-pagina-sobre">
                <div className="grid-sobre">
                    <div className="card1-sobre">
                        <div className="foto">
                            <div className="folha">
                                
                            </div>
                        </div>
                    </div>
                    <div className="card2-sobre">
                        <h1>Minha História</h1>
                        <p>
                            Estudate de Física do Instituto Federal de Educação,
                            Ciência e Tecnologia do Maranhão no campus Imperatriz,
                            sempre fui apaixonado por tecnologia ciência e inovação.
                            Desde pequeno sempre gostei de aprender sozinho e a internet
                            só favorece essa concepção, mesmo sendo um ótimo aluno
                            na escola tradicional, acredito fortemente que o nosso
                            sistema de ensino esteja defasado. 
                        </p>
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

export default Sobre