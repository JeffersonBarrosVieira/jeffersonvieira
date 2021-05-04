import React from 'react';
import Molde from '../_molde';


const Mecanico = (props) => {
    return(<>
        <div id="molde" style={{backgroundImage: "linear-gradient(45deg, #06520a71, #120655a4 60%), url('/img/teste8.jpg')"}}>
            <Molde titulo="Pojeto 1" imagem="/img/projetos/mecanico/braço-robotico.jpg">
                Resumo do projeto
            </Molde>
            <Molde titulo="Pojeto 4" imagem="/img/projetos/mecanico/braço-robotico.jpg">
                Resumo do projeto
            </Molde>
            {props.children}
        </div>
    </>)
}

export default Mecanico;