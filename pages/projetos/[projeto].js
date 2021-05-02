import { useRouter } from 'next/router';
import React, {useState} from 'react';

import Mecanico from './mecanico/mecanico';
import Web from './web/web';
import Matematico from './matematica/matematico';
import Docencia from './docencia/docencia';

var num = 0;

function Projetos (){
    const router = useRouter();
    const id = router.query.projeto;
    let conteudo = {"mecanico": <div style={{color: '#c9c9c9',
                                            width: '100%',
                                            borderTop: '1px solid #000000ce',
                                            borderBottom: '1px solid #000000ce',
                                            padding: '0',
                                            height: '0',
                                            opacity: '0',
                                            animation: 'aparecer 4s 0.7s ease-out forwards'}}>
                                    <Mecanico/>
                                    <div style={{padding: '20px 0 0 0',
                                                width: '100%',
                                                margin: '0',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                flex: '1',
                                                display: 'flex',
                                                flexDirection: 'column'}}>
                                        <a href="#inicio" onClick={ () => (AlterarMecanico(""),
                                                                            AlterarWeb(""),
                                                                            AlterarMatematico(""),
                                                                            AlterarDocente(""))}>
                                            <img style={{width: '50px',
                                                        height: '50px',
                                                        margin: '30px 0 -10px 0',
                                                        animation: 'bounce2 2s infinite'}} src="/img/seta.png"/>
                                        </a>
                                    </div>
                                </div>,

                    "web":  <div style={{color: '#c9c9c9',
                                        width: '100%',
                                        borderTop: '1px solid #000000ce',
                                        borderBottom: '1px solid #000000ce',
                                        padding: '0',
                                        height: '0',
                                        opacity: '0',
                                        animation: 'aparecer 4s 0.7s ease-out forwards'}}>

                                <Web/>
                                <div style={{padding: '20px 0 0 0',
                                            width: '100%',
                                            margin: '0',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flex: '1',
                                            display: 'flex',
                                            flexDirection: 'column'}}>
                                    <a href="#p-web" onClick={ () => (AlterarMecanico(""),
                                                                        AlterarWeb(""),
                                                                        AlterarMatematico(""),
                                                                        AlterarDocente(""))}>
                                        <img style={{width: '50px',
                                                    height: '50px',
                                                    margin: '30px 0 -10px 0',
                                                    animation: 'bounce2 2s infinite'}} src="/img/seta.png"/>
                                    </a>
                                </div>
                            </div>,

                    "matematico":   <div style={{color: '#c9c9c9',
                                                width: '100%',
                                                borderTop: '1px solid #000000ce',
                                                borderBottom: '1px solid #000000ce',
                                                padding: '0',
                                                height: '0',
                                                opacity: '0',
                                                animation: 'aparecer 4s 0.7s ease-out forwards'}}>
                                        <Matematico/>
                                        <div style={{padding: '20px 0 0 0',
                                                    width: '100%',
                                                    margin: '0',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    flex: '1',
                                                    display: 'flex',
                                                    flexDirection: 'column'}}>
                                            <a href="#p-matematico" onClick={ () => (AlterarMecanico(""),
                                                                                AlterarWeb(""),
                                                                                AlterarMatematico(""),
                                                                                AlterarDocente(""))}>
                                                <img style={{width: '50px',
                                                            height: '50px',
                                                            margin: '30px 0 -10px 0',
                                                            animation: 'bounce2 2s infinite'}} src="/img/seta.png"/>
                                            </a>
                                        </div>
                                    </div>,

                    "docente":  <div style={{color: '#c9c9c9',
                                            width: '100%',
                                            borderTop: '1px solid #000000ce',
                                            padding: '0',
                                            height: '0',
                                            opacity: '0',
                                            animation: 'aparecer 4s 0.7s ease-out forwards'}}>
                                    <Docencia/>
                                    <div style={{padding: '20px 0 0 0',
                                                width: '100%',
                                                margin: '0',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                flex: '1',
                                                display: 'flex',
                                                flexDirection: 'column'}}>
                                        <a href="#p-docencia" onClick={ () => (AlterarMecanico(""),
                                                                            AlterarWeb(""),
                                                                            AlterarMatematico(""),
                                                                            AlterarDocente(""))}>
                                            <img style={{width: '50px',
                                                        height: '50px',
                                                        margin: '30px 0 -10px 0',
                                                        animation: 'bounce2 2s infinite'}} src="/img/seta.png"/>
                                        </a>
                                    </div>
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
                    <a href="/contato" className="card-menu">
                        <h3>Contato</h3>
                    </a>
                </div>
            </div>
        </header>


        <div id="pagina-projetos">
            <p id="inicio" style={{padding: '0', margin:'0', width: '0', height: '0'}}></p>
            <p id="p-mecanico" style={{padding: '0', margin:'0', width: '0', height: '0'}}></p>

            <main className="inicio">

                
                    <div className="seccao-1" style={{paddingTop: 'calc(8vh + 40px)'}}>
                        <a id="mecanico" onClick={ () => (AlterarMecanico(conteudo.mecanico), 
                                            AlterarWeb(""),
                                            AlterarMatematico(""),
                                            AlterarDocente(""))}>
                            PROJETOS MECÂNICOS
                        </a>

                        <div style={{width:'165px',
                                    height: '165px',
                                    backgroundColor: '#c9c9c9',
                                    backgroundImage: "url('/img/robo.gif')",
                                    backgroundSize: 'contain',
                                    backgroundRepeat: 'no-repeat',
                                    borderRadius: '82.5px',
                                    margin: '0'}}>
                            
                        </div>
                    </div>

                    {PMecanico}

                    <p id="p-web" style={{padding: '0', margin:'0', width: '0', height: '0'}}></p>

                    <div className="seccao-2">
                        <div style={{width:'165px',
                                    height: '165px',
                                    backgroundColor: '#c9c9c9',
                                    backgroundImage: "url('/img/computador.gif')",
                                    backgroundSize: '170% 120%',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    borderRadius: '82.5px',
                                    margin: '0'}}>
                            
                        </div>

                        <a id="web" onClick={ () => (AlterarMecanico(""),
                                            AlterarWeb(conteudo.web),
                                            AlterarMatematico(""),
                                            AlterarDocente(""))}>
                            PROJETOS WEB
                        </a>
                    </div>

                    {PWeb}

                    <p id="p-matematico" style={{padding: '0', margin:'0', width: '0', height: '0'}}></p>

                    <div className="seccao-1">
                        <a id="matematico" onClick={ () => (AlterarMecanico(""),
                                            AlterarWeb(""),
                                            AlterarMatematico(conteudo.matematico),
                                            AlterarDocente(""))}>
                            PROJETOS MATEMÁTICOS
                        </a>

                        <div style={{width:'165px',
                                    height: '165px',
                                    backgroundColor: '#c9c9c9',
                                    backgroundImage: "url('/img/matematica.gif')",
                                    backgroundSize: '100% 100%',
                                    backgroundRepeat: 'no-repeat',
                                    borderRadius: '82.5px',
                                    margin: '0'}}>
                            
                        </div>
                    </div>

                    {PMatematico}

                    <p id="p-docencia" style={{padding: '0', margin:'0', width: '0', height: '0'}}></p>

                    <div className="seccao-2">
                        <div style={{width:'165px',
                                    height: '165px',
                                    backgroundColor: '#c9c9c9',
                                    backgroundImage: "url('/img/docente.gif')",
                                    backgroundSize: '180% 100%',
                                    backgroundRepeat: 'no-repeat',
                                    borderRadius: '82.5px',
                                    margin: '0'}}>
                            
                        </div>

                        <a id="docencia" onClick={ () => (AlterarMecanico(""),
                                                            AlterarWeb(""),
                                                            AlterarMatematico(""),
                                                            AlterarDocente(conteudo.docente))}>
                            PROJETOS À DOCENCIA
                        </a>
                    </div>

                    {PDocente}
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