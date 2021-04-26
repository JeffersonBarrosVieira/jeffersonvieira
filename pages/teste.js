import React, {useState} from 'react';

function Card(props) {
    return(
            <div style={{margin: '0',
                        padding: '0',
                        height: '370px',
                        width: '350px',
                        
                        backgroundImage: "url('../img/card/Amarela_direita.png')",
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'left',
            
                        opacity: '0',
            
                        animation: 'fadeIn 0.5s 1.0s both'}}>

                <div style={{margin: '0',
                            padding: '0',
                            height: '100%',
                            width: '100%',
                            
                            backgroundImage: "url('../img/card/Fundo.png')",
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'left',
                
                            opacity: '0',
                
                            animation: 'fadeIn 1.0s 1.0s both'}}>

                    <div style={{margin: '0',
                                padding: '0',
                                height: '100%',
                                width: '100%',
                                
                                backgroundImage: "url('../img/card/Amarela_esquerda.png')",
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                backgroundPosition: 'left',
                    
                                opacity: '0',
                    
                                animation: 'fadeIn 1.0s 1.5s both'}}>

                        <div style={{margin: '0',
                                    padding: '0',
                                    height: '100%',
                                    width: '100%',
                                    
                                    backgroundImage: "url('../img/card/Branca.png')",
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'left',
                        
                                    opacity: '0',
                        
                                    animation: 'fadeIn 1.0s 1.8s both'}}>

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
                                            
                                            backgroundImage: "url('../img/card/icones/mecanico.png')",
                                            backgroundRepeat: 'no-repeat',
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'left',
                                
                                            opacity: '0',
                                
                                            animation: 'fadeIn 1.0s 2.4s both'}}>

                                    <div style={{margin: '0',
                                                padding: '0',
                                                height: '100%',
                                                width: '100%',

                                                display: 'flex',
                                                flexDirection: 'column'}}>

                                        <div style={{margin: '70px 0px 60px 170px',
                                                    padding: '5px 0 0 0',
                                                    width: '120px',
                                                    height: '80px',
                                                    textAlign: 'center',
                                                    fontSize: '32px',
                                                    lineHeight: '36px',
                                                    fontFamily: 'cursive',

                                                    borderTop: '3px solid #c9c9c993',
                                                    borderBottom: '3px solid #c9c9c993',
                                                    
                                                    fontWeight: '100',
                                                    color: '#da995c',

                                                    opacity: '0',

                                                    animation: 'fadeIn 1.0s 2.7s both'}}>
                                            
                                            {props.title}
                                            
                                        </div>
                                        <div style={{margin: '0px 0px 0px 50px',
                                                    padding: '0',
                                                    height: '110px',
                                                    width: '235px',
                                                    textAlign: 'justify',
                                                    fontSize: '13px',
                                                    lineHeight: '15px',

                                                    fontWeight: '100',
                                                    color: '#c9c9c9',

                                                    opacity: '0',

                                                    animation: 'fadeIn 1.0s 3.0s both'}}>
                                                
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

const Teste = () => {
    return(
        <div id="teste">
            <div id="cards">
                <Card title="Projetos Mecânicos"> 
                    Desenvolvimentos de uma máquina ou equipamento. Nesses projetos, tem como procedimentos metodológicos: design inicial, dimensionamento, análise mecânica, plantas estruturais e modelagem matemática.
                </Card>
                {/* <div className="amarela-direita">
                    <div className="fundo">
                        <div className="amarela-esquerda">
                            <div className="branca">
                                <div className="amarela-baixo">
                                    <div className="icone-mecanica">
                                        <div className="textos">
                                            <div className="titulo">
                                                Projetos
                                                Mecânicos
                                            </div>
                                            <div className="descricao">
                                                 Desenvolvimentos de uma máquina ou equipamento. Nesses projetos, tem como procedimentos metodológicos: design inicial, dimensionamento, análise mecânica, plantas estruturais e modelagem matemática.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Teste