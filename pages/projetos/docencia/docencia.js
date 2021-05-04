import React, {useState} from 'react';
import Molde from '../_molde';

const Docencia = (props) => {
    return(<>
        <div id="molde" style={{backgroundImage: "linear-gradient(45deg, #06520a71, #120655a4 60%), url('/img/teste8.jpg')"}}>
            <Molde titulo="Pojeto 1" imagem="/img/projetos/mecanico/braço-robotico.jpg">
                Resumo do projeto
            </Molde>
            {props.children}
        </div>
    </>)
}

export default Docencia;