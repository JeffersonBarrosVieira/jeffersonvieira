import React from 'react';

function Card(props) {
    return(
            <div style={{margin: '10px 0',
                        padding: '0',
                        height: '370px',
                        width: '350px',
                        
                        backgroundImage: "url('../img/card/Amarela_direita.png')",
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'left',
            
                        opacity: '0',
            
                        animation: 'fadeIn 0.5s '+ (parseInt(props.incremento)+1.0).toString() +'s'+' both'}}>

                <div style={{margin: '0',
                            padding: '0',
                            height: '100%',
                            width: '100%',
                            
                            backgroundImage: "url('../img/card/Fundo.png')",
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'left',
                
                            opacity: '0',
                
                            animation: 'fadeIn 1.0s '+ (parseInt(props.incremento)+0.5).toString() +'s'+' both'}}>

                    <div style={{margin: '0',
                                padding: '0',
                                height: '100%',
                                width: '100%',
                                
                                backgroundImage: "url('../img/card/Amarela_esquerda.png')",
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                backgroundPosition: 'left',
                    
                                opacity: '0',
                    
                                animation: 'fadeIn 1.0s '+ (parseInt(props.incremento)+1.5).toString() +'s'+' both'}}>

                        <div style={{margin: '0',
                                    padding: '0',
                                    height: '100%',
                                    width: '100%',
                                    
                                    backgroundImage: "url('../img/card/Branca.png')",
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'left',
                        
                                    opacity: '0',
                        
                                    animation: 'fadeIn 1.0s '+ (parseInt(props.incremento)+1.8).toString() +'s'+' both'}}>

                            <div style={{margin: '0',
                                        padding: '0',
                                        height: '100%',
                                        width: '100%',
                                        
                                        backgroundImage: "url('../img/card/Amarela_baixo.png')",
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'left',
                            
                                        opacity: '0',
                            
                                        animation: 'fadeIn 1.0s 2.1s both'}}>

                                <div style={{margin: '0',
                                            padding: '0',
                                            height: '100%',
                                            width: '100%',
                                            
                                            backgroundImage: props.diretorio,
                                            backgroundRepeat: 'no-repeat',
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'left',
                                
                                            opacity: '0',
                                
                                            animation: 'fadeIn 1.0s '+ (parseInt(props.incremento)+2.4).toString() +'s'+' both'}}>

                                    <div style={{margin: '0',
                                                padding: '0',
                                                height: '100%',
                                                width: '100%',

                                                display: 'flex',
                                                flexDirection: 'column'}}>

                                        <div style={{margin: '70px 0px 50px 170px',
                                                    padding: '5px 0 0 0',
                                                    width: '120px',
                                                    height: '80px',
                                                    textAlign: 'center',
                                                    fontSize: '31px',
                                                    lineHeight: '36px',
                                                    fontFamily: 'cursive',

                                                    borderTop: '3px solid #c9c9c993',
                                                    borderBottom: '3px solid #c9c9c993',
                                                    
                                                    fontWeight: '100',
                                                    color: '#da995c',

                                                    opacity: '0',

                                                    animation: 'fadeIn 1.0s '+ (parseInt(props.incremento)+2.7).toString() +'s'+' both'}}>
                                            
                                            {props.title}
                                            
                                        </div>
                                        <div style={{margin: '0px 0px 0px 50px',
                                                    padding: '0',
                                                    height: '110px',
                                                    width: '235px',
                                                    textAlign: 'justify',
                                                    fontSize: '15px',
                                                    lineHeight: '16px',

                                                    fontWeight: '100',
                                                    color: '#c9c9c9',

                                                    opacity: '0',

                                                    animation: 'fadeIn 1.0s '+ (parseInt(props.incremento)+3.0).toString() +'s'+' both'}}>
                                                
                                            {props.children}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
};

function Projetos() {
    return(
        <div id="projetos">
            <div className="grid-projetos">    
                <a className="a-1" href="/projetos/mecanico#p-mecanico">
                    <Card diretorio="url('../img/card/icones/mecanico.png')"
                        incremento="2"
                        title="Projetos Mecânicos"> 
                        Clique nesse card para ver meus desenvolvimentos de mecanismos ou equipamentos. Abordo: <br/><br/>
                        -Dimensionamento;<br/>
                        -Análise mecânica/elétrica;<br/>
                        -Plantas estruturais;<br/>
                        -Modelagem matemática.
                    </Card>
                </a>

                <a className="a-2" href="/projetos/web#p-web">
                    <Card diretorio="url('../img/card/icones/web.png')"
                        incremento="3"
                        title="Projetos Web"> 
                        Clique nesse card para contemplar meus desenvolvimentos web que abarcam em geral a utilização das linguagens de programação: <br/><br/>
                        -HTML/Css/Sass;&nbsp; &nbsp;-C++; <br/>
                        -Python;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;-JavaScript.
                    </Card>
                </a>

                <a className="a-3" href="/projetos/matematico#p-matematico">
                    <Card diretorio="url('../img/card/icones/matematica.png')"
                        incremento="4"
                        title="Projetos Matemático"> 
                        Clique nesse card para visualizar elaborações de modelos matemáticos em cima de situações físicas. Abordo: <br/><br/>
                        -Situações/Problemas Físicos;<br/>
                        -Ferramentas tecnológicas; <br/>
                        -Modelagem matemática;
                    </Card>
                </a>

                <a className="a-4" href="/projetos/docencia#p-docencia">
                    <Card diretorio="url('../img/card/icones/docencia.png')"
                        incremento="5"
                        title="Projetos à Docência"> 
                        Clique nesse card para apreciar atividades aplicadas em escolas de Ensino Médio. Abordo: <br/><br/>
                        -Práticas pedagógicas;<br/>
                        -Pesquisa científica fora da escola; <br/>
                        -Compreensão da finalidade do conteúdo na prática.
                    </Card>
                </a>

            </div>
        </div>
    )
}

export default Projetos