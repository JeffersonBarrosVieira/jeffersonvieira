import { useRouter } from 'next/router';
import React, {useState} from 'react';

var num = 0;

function Projetos (){
    const router = useRouter();
    const id = router.query.projeto;
    let conteudo = {"mecanico": <div style={{color: 'red',
                                            width: '100%',
                                            borderTop: '1px solid #000000ce',
                                            borderBottom: '1px solid #000000ce',
                                            padding: '0',
                                            height: '0',
                                            opacity: '0',
                                            animation: 'aparecer 4s 0.7s ease-out forwards'}}>
                                    Apresentação dos Projetos Mecanicos
                                </div>,

                    "web":  <div style={{color: 'red',
                                        width: '100%',
                                        borderTop: '1px solid #000000ce',
                                        borderBottom: '1px solid #000000ce',
                                        padding: '0',
                                        height: '0',
                                        opacity: '0',
                                        animation: 'aparecer 4s 0.7s ease-out forwards'}}>
                                Apresentação dos Projetos Web
                            </div>,

                    "matematico":   <div style={{color: 'red',
                                                width: '100%',
                                                borderTop: '1px solid #000000ce',
                                                borderBottom: '1px solid #000000ce',
                                                padding: '0',
                                                height: '0',
                                                opacity: '0',
                                                animation: 'aparecer 4s 0.7s ease-out forwards'}}>
                                        Apresentação dos Projetos Matemáticos
                                    </div>,

                    "docente":  <div style={{color: 'red',
                                            width: '100%',
                                            borderTop: '1px solid #000000ce',
                                            padding: '0',
                                            height: '0',
                                            opacity: '0',
                                            animation: 'aparecer 4s 0.7s ease-out forwards'}}>
                                    Apresentação dos Projetos à Docência
                                </div>};

    const[PMecanico, AlterarMecanico] = useState("");
    const[PWeb, AlterarWeb] = useState("");
    const[PMatematico, AlterarMatematico] = useState("");
    const[PDocente, AlterarDocente] = useState("");

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

    

    return(<>
        <header id="topo">
            <div>
                <a href="../">
                    <img className="seta" src="/img/seta2.png"/>
                </a>
                
                <a><h1 className="nome">Jefferson Barros</h1></a>
                <div className="menu">
                    <a href="#conhecer" className="card-menu">
                        <h3>Contato</h3>
                    </a>
                </div>
            </div>
        </header>

        <div id="pagina-projetos">
            <p id="inicio" style={{width: '0', height: '0'}}></p>

            <main className="inicio">

                
                    <div className="seccao-1">
                        <a id="mecanico" onClick={ () => (AlterarMecanico(conteudo.mecanico), 
                                            AlterarWeb(""),
                                            AlterarMatematico(""),
                                            AlterarDocente(""))}>
                            Projetos Mecânicos
                        </a>

                        <div style={{width:'165px',
                                    height: '165px',
                                    backgroundColor: '#c9c9c9',
                                    borderRadius: '82.5px',
                                    margin: '0'}}>
                            
                        </div>
                    </div>

                    {PMecanico}

                    <div className="seccao-2">
                        <div style={{width:'165px',
                                    height: '165px',
                                    backgroundColor: '#c9c9c9',
                                    borderRadius: '82.5px',
                                    margin: '0'}}>
                            
                        </div>

                        <a id="web" href="#mecanico" onClick={ () => (AlterarMecanico(""),
                                            AlterarWeb(conteudo.web),
                                            AlterarMatematico(""),
                                            AlterarDocente(""))}>
                            Projetos Web
                        </a>
                    </div>

                    {PWeb}
                    <div className="seccao-1">
                        <a id="matematico" href="#web" onClick={ () => (AlterarMecanico(""),
                                            AlterarWeb(""),
                                            AlterarMatematico(conteudo.matematico),
                                            AlterarDocente(""))}>
                            Projetos Matemáticos
                        </a>

                        <div style={{width:'165px',
                                    height: '165px',
                                    backgroundColor: '#c9c9c9',
                                    borderRadius: '82.5px',
                                    margin: '0'}}>
                            
                        </div>
                    </div>

                    {PMatematico}

                    <div className="seccao-2">
                        <div style={{width:'165px',
                                    height: '165px',
                                    backgroundColor: '#c9c9c9',
                                    borderRadius: '82.5px',
                                    margin: '0'}}>
                            
                        </div>

                        <a id="docencia" href="#matematico" onClick={ () => (AlterarMecanico(""),
                                                            AlterarWeb(""),
                                                            AlterarMatematico(""),
                                                            AlterarDocente(conteudo.docente))}>
                            Projetos à Docência
                        </a>
                    </div>

                    {PDocente}
                
                
                <div className="fundo2">
                    <div className="conteudo-fundo2">
                        <a href="#inicio" onClick={ () => (AlterarMecanico(""),
                                                            AlterarWeb(""),
                                                            AlterarMatematico(""),
                                                            AlterarDocente(""))}>
                            <img className="seta" src="/img/seta.png"/>
                        </a>
                        <div className="box-engrenagem">
                            <a href="#inicio" onClick={ () => (AlterarMecanico(""),
                                                            AlterarWeb(""),
                                                            AlterarMatematico(""),
                                                            AlterarDocente(""))}>
                                <img className="engrenagem" src="/img/engrenagem.png"/>
                            </a>
                        </div>
                    </div>
                </div>
            </main>

            <footer id="rodape-inicial">
                <a href="#" target="_blank" rel="noopener noreferrer">
                    Developed by <h4>: Jefferson Barros Vieira</h4>.
                </a>
            </footer>
        </div>
    </>)
}

export default Projetos;