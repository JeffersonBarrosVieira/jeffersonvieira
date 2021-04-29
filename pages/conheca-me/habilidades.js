import React from 'react';

function BarraProgresso (props) {
    
    return(
        <div style={{position: 'relative',
                    display: 'flex',
                    justifyContent: 'left',
                    alignItems: 'center',
                    height: '30px',
                    margin: '8px 0',
                    zIndex: '1'}}>

            <div style={{margin: '0',
                        fontSize: '18px',
                        lineHeight: '22px',
                        textAlign: 'justify',
                        position: 'absolute',
                        border: '3px solid #c9c9c9',
                        borderRadius: '10px',
                        height: '30px',
                        width: '100%'}}>

                <p style={{margin: '0 8px'}}>{props.children}</p>
            </div>

            <div style={{margin: '0',
                        fontSize: '18px',
                        lineHeight: '22px',
                        textAlign: 'right',
                        position: 'absolute',
                        border: '3px solid #c9c9c9',
                        borderRadius: '10px',
                        height: '30px',
                        width: '100%'}}>

                <p style={{margin: '0 8px'}}>{ props.porcentagem}</p>
            </div>

            <div style={{height: '30px', width: props.porcentagem, position: 'absolute', zIndex: '-1'}}>
                <div style={{height: '30px', width: '0', backgroundImage: 'linear-gradient(to top,  #d57528, #1206557a 70%)',
                            backgroundAttachment: 'fixed', backgroundPosition: 'bottom', backgroundSize: 'cover',
                            backgroundrepeat: 'no-repeat', position: 'absolute', borderRadius: '10px',
                            zIndex: '-1', animation: 'aumentarLargura 2s '+props.tempo+' ease-out forwards'}}/>
            </div>
        </div>
    )
}

function Habilidades() {
    return(
        <div id="habilidades">
            <div className="grid-habilidades">    
                <div className="card-descricao">
                    <h3>Programação</h3>
                    <BarraProgresso porcentagem='90%' tempo='5s'>HTML</BarraProgresso>
                    <BarraProgresso porcentagem='81%' tempo='5.2s'>PHP</BarraProgresso>
                    <BarraProgresso porcentagem='73%' tempo='5.4s'>JavaScript</BarraProgresso>
                    <BarraProgresso porcentagem='90%' tempo='5.6s'>CSS</BarraProgresso>
                    <BarraProgresso porcentagem='86%' tempo='5.8s'>SASS</BarraProgresso>
                    <BarraProgresso porcentagem='78%' tempo='6s'>C++</BarraProgresso>
                </div>

                <div className="card-descricao">
                    <h3>Design Gráfico</h3>
                    <BarraProgresso porcentagem='70%' tempo='6.2s'>Photoshop</BarraProgresso>
                    <BarraProgresso porcentagem='90%' tempo='6.4s'>GIMP</BarraProgresso>
                    <BarraProgresso porcentagem='83%' tempo='6.6s'>Inkscape</BarraProgresso>
                </div>
                <div className="card-descricao">
                    <h3>Modelagem Matemática</h3>
                    <BarraProgresso porcentagem='90%' tempo='6.8s'>Física-Matemática</BarraProgresso>
                    <BarraProgresso porcentagem='83%' tempo='7s'>Cálculo Infinitesimal</BarraProgresso>
                    <BarraProgresso porcentagem='75%' tempo='7.2s'>Álgebra Linear</BarraProgresso>
                </div>
            </div>
        </div>
    )
}

export default Habilidades