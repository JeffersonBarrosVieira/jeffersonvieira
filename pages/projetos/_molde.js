import React from 'react';

export default function Molde(props){
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