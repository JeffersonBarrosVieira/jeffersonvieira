import { useRouter } from 'next/router';
import Link from 'next/link';
import React, {useState} from 'react';

import Mecanico from './mecanico/mecanico';
import Web from './web/web';
import Matematico from './matematica/matematico';
import Docencia from './docencia/docencia';

var num = 0;

// Função Seta() só para economizar linhas de código, e poder
// chamar ela em qualquer lugar.
function Seta(){

    return(
        <div style={{padding: '0 0 0 0',
                    width: '100%',
                    margin: '0',
                    marginTop: '30px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: '1',
                    display: 'flex',
                    flexDirection: 'column'}}>
            <a href="#inicio" style={{opacity: '0', animation: 'fadeIn 2s 4s ease-in-out forwards'}}>
                <img style={{width: '50px',
                            height: '50px',
                            animation: 'bounce2 2s infinite'}} src="/img/seta2.png"/>
            </a>
        </div>
    )
}

export default function Projetos (){

    // Ler a url e armazena na variável 'id'
    const router = useRouter();
    const id = router.query.projeto;

    // Funções para alterar o conteúdo dinâmicamente
    const[PMecanico, AlterarMecanico] = useState("");
    const[PWeb, AlterarWeb] = useState("");
    const[PMatematico, AlterarMatematico] = useState("");
    const[PDocente, AlterarDocente] = useState("");

    // Os conteúdos dinâmicos, que vão ser intercalados
    let conteudo = {"mecanico": <div style={{color: '#c9c9c9',
                                            width: '100%',
                                            borderTop: '1px solid #000000ce',
                                            borderBottom: '1px solid #000000ce',
                                            padding: '0',
                                            height: '0',
                                            opacity: '0',
                                            animation: 'aparecer1 4s 0.7s ease-out forwards'}}>
                                    <Mecanico>
                                        <a onClick={ () => (AlterarMecanico(""),
                                                            AlterarWeb(""),
                                                            AlterarMatematico(""),
                                                            AlterarDocente(""))}>
                                            <Seta/>
                                        </a>
                                    </Mecanico>
                                </div>,

                    "web":  <div style={{color: '#c9c9c9',
                                        width: '100%',
                                        borderTop: '1px solid #000000ce',
                                        borderBottom: '1px solid #000000ce',
                                        padding: '0',
                                        height: '0',
                                        opacity: '0',
                                        animation: 'aparecer1 4s 0.7s ease-out forwards'}}>

                                <Web>
                                        <a onClick={ () => (AlterarMecanico(""),
                                                            AlterarWeb(""),
                                                            AlterarMatematico(""),
                                                            AlterarDocente(""))}>
                                            <Seta/>
                                        </a>
                                </Web>
                            </div>,

                    "matematico":   <div style={{color: '#c9c9c9',
                                                width: '100%',
                                                borderTop: '1px solid #000000ce',
                                                borderBottom: '1px solid #000000ce',
                                                padding: '0',
                                                height: '0',
                                                opacity: '0',
                                                animation: 'aparecer1 4s 0.7s ease-out forwards'}}>
                                        <Matematico>
                                            <a onClick={ () => (AlterarMecanico(""),
                                                                AlterarWeb(""),
                                                                AlterarMatematico(""),
                                                                AlterarDocente(""))}>
                                                <Seta/>
                                            </a>
                                        </Matematico>
                                    </div>,

                    "docente":  <div style={{color: '#c9c9c9',
                                            width: '100%',
                                            borderTop: '1px solid #000000ce',
                                            padding: '0',
                                            height: '0',
                                            opacity: '0',
                                            animation: 'aparecer1 4s 0.7s ease-out forwards'}}>
                                    <Docencia>
                                        <a onClick={ () => (AlterarMecanico(""),
                                                            AlterarWeb(""),
                                                            AlterarMatematico(""),
                                                            AlterarDocente(""))}>
                                            <Seta/>
                                        </a>
                                    </Docencia>
                                </div>};

    // Função para identificar e comparar o link na url que foi criado ao clicar nos cards
    // da página anterior seção projetos, com os endereços que devem ser aberto. verifica se
    // existe tal palavra na url
    function Verificacao(){
        if((id !== undefined) & (num == 0)){
            if(id == "mecanico"){
                AlterarMecanico(conteudo.mecanico);
            } else if(id == "web"){
                AlterarWeb(conteudo.web);
            } else if(id == "matematico"){
                AlterarMatematico(conteudo.matematico);
            } else if(id == "docencia"){
                AlterarDocente(conteudo.docente);
            }else {
                AlterarMecanico("");
                AlterarWeb("");
                AlterarMatematico("");
                AlterarDocente("");
            }
            num = 1;
        }
    }

    // Como estou usando um recursso de pré-carregamento <Link><Link/>, a variavel 'num'
    // ficará com o mesmo valor, mesmo navegando entre as páginas do site, a não ser que der
    // um refresh para resetar tudo, então é necessário resetar a variável 'num'. E com isso
    // a função de verificação poderá fazer uma nova leitura, e ver qual seção será aberta ao
    // entrar na página (projetos mecânico), (projetos web), (projetos matematicos) ou
    // (projetos à docência).

    // Função que reseta
    function Reset(){
        num = 0;
    }

    

    return(<>
        <header id="topo">
            <div>
                <Link href="../">
                    <a onClick={() => Reset()}>
                        <img className="seta" src="/img/seta2.png"/>
                    </a>
                </Link>
                <a><h1 className="nome">Jefferson Barros</h1></a>
                <div className="menu">
                    <Link href="/contato">
                        <a className="card-menu" onClick={() => Reset()}>
                            <h3>Contato</h3>
                        </a>
                    </Link>
                </div>
            </div>
        </header>

        {/* quando a animação principal de carregamento terminar, executará a função Verificação() */}
        <div id="pagina-projetos" onAnimationEnd={ () => Verificacao()}>
            {/* âncoras */}
            <p id="inicio" style={{padding: '0', margin:'0', width: '0', height: '0'}}></p>
            <p id="p-mecanico" style={{padding: '0', margin:'0', width: '0', height: '0'}}></p>

            <main className="inicio">

                    {/* Seção de Projetos Mecânicos */}
                    <div className="seccao-1" style={{paddingTop: 'calc(8vh + 40px)'}}>
                        {/* Botão projetos mecânicos */}
                        <a id="mecanico" onClick={ () => (AlterarMecanico(conteudo.mecanico), 
                                                        AlterarWeb(""),
                                                        AlterarMatematico(""),
                                                        AlterarDocente(""))}>
                            PROJETOS MECÂNICOS
                        </a>

                        {/* gif do robô */}
                        <div style={{width:'165px',
                                    height: '165px',
                                    backgroundColor: '#c9c9c9',
                                    backgroundImage: "url('/img/robo.gif')",
                                    backgroundSize: 'contain',
                                    backgroundRepeat: 'no-repeat',
                                    borderRadius: '82.5px',
                                    margin: '0',
                                    cursor: 'pointer'}} onClick={ () => (AlterarMecanico(conteudo.mecanico), 
                                                                        AlterarWeb(""),
                                                                        AlterarMatematico(""),
                                                                        AlterarDocente(""))}>
                            
                        </div>
                    </div>

                    {PMecanico}
                    {/* Fim da seção de projetos mecânicos */}
                    
                    {/* âncora */}
                    <p id="p-web" style={{padding: '0', margin:'0', width: '0', height: '0'}}></p>
                    
                    {/* Seção de Projetos Web */}
                    <div className="seccao-2">
                        {/* Gif do Computador */}
                        <div style={{width:'165px',
                                    height: '165px',
                                    backgroundColor: '#c9c9c9',
                                    backgroundImage: "url('/img/computador.gif')",
                                    backgroundSize: '170% 120%',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    borderRadius: '82.5px',
                                    margin: '0',
                                    cursor: 'pointer'}} onClick={ () => (AlterarMecanico(""),
                                                                    AlterarWeb(conteudo.web),
                                                                    AlterarMatematico(""),
                                                                    AlterarDocente(""))}>
                            
                        </div>
                        
                        {/* Botão Projetos Web */}
                        <a id="web" onClick={ () => (AlterarMecanico(""),
                                            AlterarWeb(conteudo.web),
                                            AlterarMatematico(""),
                                            AlterarDocente(""))}>
                            PROJETOS WEB
                        </a>
                    </div>

                    {PWeb}
                    {/* Fim da seção de projetos web */}

                    {/* âncora */}
                    <p id="p-matematico" style={{padding: '0', margin:'0', width: '0', height: '0'}}></p>
                    
                    {/* Seção de Projetos Matemáticos */}
                    <div className="seccao-1">
                        {/* Botão Projetos Matemáticos */}
                        <a id="matematico" onClick={ () => (AlterarMecanico(""),
                                            AlterarWeb(""),
                                            AlterarMatematico(conteudo.matematico),
                                            AlterarDocente(""))}>
                            PROJETOS MATEMÁTICOS
                        </a>
                        
                        {/* Gif do gráfico animado */}
                        <div style={{width:'165px',
                                    height: '165px',
                                    backgroundColor: '#c9c9c9',
                                    backgroundImage: "url('/img/matematica.gif')",
                                    backgroundSize: '100% 100%',
                                    backgroundRepeat: 'no-repeat',
                                    borderRadius: '82.5px',
                                    margin: '0',
                                    cursor: 'pointer'}} onClick={ () => (AlterarMecanico(""),
                                                                        AlterarWeb(""),
                                                                        AlterarMatematico(conteudo.matematico),
                                                                        AlterarDocente(""))}>
                            
                        </div>
                    </div>

                    {PMatematico}
                    {/* Fim da seção de projetos matemáticos */}

                    {/* âncora */}
                    <p id="p-docencia" style={{padding: '0', margin:'0', width: '0', height: '0'}}></p>
                    
                    {/* Seção de Projetos à Docência */}
                    <div className="seccao-2">
                        {/* Gif do Lápis animado */}
                        <div style={{width:'165px',
                                    height: '165px',
                                    backgroundColor: '#c9c9c9',
                                    backgroundImage: "url('/img/docente.gif')",
                                    backgroundSize: '180% 100%',
                                    backgroundRepeat: 'no-repeat',
                                    borderRadius: '82.5px',
                                    margin: '0',
                                    cursor: 'pointer'}} onClick={ () => (AlterarMecanico(""),
                                                                        AlterarWeb(""),
                                                                        AlterarMatematico(""),
                                                                        AlterarDocente(conteudo.docente))}>
                            
                        </div>
                        
                        {/* Botão Projetos à Docência */}
                        <a id="docencia" onClick={ () => (AlterarMecanico(""),
                                                            AlterarWeb(""),
                                                            AlterarMatematico(""),
                                                            AlterarDocente(conteudo.docente))}>
                            PROJETOS À DOCENCIA
                        </a>
                    </div>

                    {PDocente}
                    {/* Fim da seção de projetos à docência */}
            </main>

            <footer id="rodape-inicial">
                <a href="#" target="_blank" rel="noopener noreferrer">
                    Developed by <h4>: Jefferson Barros Vieira</h4>.
                </a>
            </footer>
        </div>
    </>)
}