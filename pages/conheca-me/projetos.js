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

                                        <div style={{margin: '70px 0px 60px 170px',
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
                <Card diretorio="url('../img/card/icones/mecanico.png')"
                    incremento="0"
                    title="Projetos Mecânicos"> 
                    Desenvolvimentos de máquinas ou equipamentos. Nesses projetos, tem como procedimentos metodológicos: design inicial, dimensionamento, análise mecânica, plantas estruturais e modelagem matemática.
                </Card>
                <Card diretorio="url('../img/card/icones/docencia.png')"
                    incremento="1"
                    title="Projetos à Docência"> 
                    Esses projetos são atividades aplicadas em escolas de Ensino Médio, com o intuito de trazer ao aluno a compreensão da finalidade do conteúdo ministrado por meio de experimentos que regem o campo da pesquisa científica.
                </Card>
                <Card diretorio="url('../img/card/icones/matematica.png')"
                    incremento="2"
                    title="Projetos Matemático"> 
                    Esses projetos tem como base, a elaboração de um modelo matemático em cima de uma situação física, abordando meios tecnológicos que possibilitem uma relação mais estreita entre a situação física e a matemática
                </Card>
                <Card diretorio="url('../img/card/icones/web.png')"
                    incremento="3"
                    title="Projetos Web"> 
                    Projetos que abarcam em geral a utilização das linguagens de programação: HTML, C++, Python, JavaScript. Onde aproveito os conhecimentos que venho adquirindo na minha carreira acadêmica, para descontrair um pouco.
                </Card>

            </div>
        </div>
    )
}

export default Projetos