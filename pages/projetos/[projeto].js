import { useRouter } from 'next/router';
import React, {useState} from 'react';

var num = 0;

function Projetos (){
    const router = useRouter();
    const id = router.query.projeto;
    let conteudo = {"mecanico": <div style={{color: 'red'}}>Apresentação dos Projetos Mecanicos</div>,
                    "web": <div style={{color: 'red'}}>Apresentação dos Projetos Web</div>,
                    "matematico": <div style={{color: 'red'}}>Apresentação dos Projetos Matemáticos</div>,
                    "docente": <div style={{color: 'red'}}>Apresentação dos Projetos à Docência</div>};

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

    

    return(
        <div id="pagina-inicial">
            <main id="inicio">
                <a href="../" style={{marginTop: '20px', fontSize: '18px', color: 'white'}}>
                    Inicio
                </a>
                <h1 className="title" style={{marginTop: '50px'}}>
                    MEUS <a href="#conhecer">PROJETOS</a>
                </h1>

                <div style={{margin: '50px 0', display: 'flex', flexDirection: 'column'}}>
                    <a id="mecanico" style={{margin: '10px 0 0 0', cursor: 'pointer'}} onClick={ () => (AlterarMecanico(conteudo.mecanico), 
                                        AlterarWeb(""),
                                        AlterarMatematico(""),
                                        AlterarDocente(""))}>
                        Aba de Projetos Mecânicos
                    </a>

                    {PMecanico}

                    <a id="web" style={{margin: '10px 0 0 0', cursor: 'pointer'}} onClick={ () => (AlterarMecanico(""),
                                        AlterarWeb(conteudo.web),
                                        AlterarMatematico(""),
                                        AlterarDocente(""))}>
                        Aba de Projetos Web
                    </a>

                    {PWeb}

                    <a id="matematico" style={{margin: '10px 0 0 0', cursor: 'pointer'}} onClick={ () => (AlterarMecanico(""),
                                        AlterarWeb(""),
                                        AlterarMatematico(conteudo.matematico),
                                        AlterarDocente(""))}>
                        Aba de Projetos Matemáticos
                    </a>

                    {PMatematico}

                    <a id="docencia" style={{margin: '10px 0 0 0', cursor: 'pointer'}} onClick={ () => (AlterarMecanico(""),
                                                        AlterarWeb(""),
                                                        AlterarMatematico(""),
                                                        AlterarDocente(conteudo.docente))}>
                        Aba de Projetos à Docência
                    </a>

                    {PDocente}
                </div>

                <div id="conhecer" style={{marginTop: '50px'}}>
                    <div className="grid">
                        <div className="frase-A">
                            "Se você quiser fazer uma torta de maçã a partir do zero,
                            você deve primeiro inventar o Universo."
                            <h3>Carl Sagan</h3>
                        </div>
                        <div className="frase-B">
                            "Eu poderia desistir, mas vejo um bom motivo para continuar...
                            eu adoro as coisas difíceis."
                            <h3>Camila Bill</h3>
                        </div>
                        <div className="frase-C">
                            "Controle suas condições iniciais e determine dentro de sua fonte de aleatoriedade qual será o seu destino."
                            <h3>Silvio Antonio Corrêa Junior</h3>
                        </div>
                        <div className="frase-D">
                            "Logo que, numa inovação, nos mostram alguma coisa de antigo, ficamos sossegados."
                            <h3>Friedrich Nietzsche</h3>
                        </div>
                        <div className="frase-E">
                            "A física é a poesia da natureza. A matemática, o idioma."
                            <h3>Antonio Gomes Lacerda</h3>
                        </div>
                    </div>
                </div>
                
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
        </div>
    )
}

export default Projetos;