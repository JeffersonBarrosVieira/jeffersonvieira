import React, {useState} from 'react';

function Molde(props){
    return(
        <div className="coluna">
            <div className="imagem" style={{backgroundImage: `url('${props.imagem}')`}}>
                <div className="escurecer">
                </div>
            </div>
            <div className="legenda">
                <h3>{props.titulo}</h3>
                <p>
                    {props.children}
                </p>
            </div>
        </div>
    )
}

const Mecanico = () => {
    return(<>
        <div id="molde">
            <Molde titulo="Pojeto 1" imagem="/img/projetos/mecanico/braço-robotico.jpg">
                Resumo do projeto
            </Molde>
            <Molde titulo="Pojeto 4" imagem="/img/projetos/mecanico/braço-robotico.jpg">
                Resumo do projeto
            </Molde>
            <Molde titulo="Pojeto 1" imagem="/img/projetos/mecanico/braço-robotico.jpg">
                Resumo do projeto
            </Molde>
        </div>
    </>)
}

export default Mecanico;