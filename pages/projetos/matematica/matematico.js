import React from 'react';
import Molde from '../_molde';

const Matematico = (props) => {
    return(<>
        <div id="molde" style={{backgroundImage: "linear-gradient(45deg, #06520a71, #120655a4 60%), url('/img/teste8.jpg')",
                                cursor: 'wait'}}>
            <Molde titulo="Seção projetos" imagem="https://static.wixstatic.com/media/cc092a_bacf98feff054b139aa6430b1b73cf13~mv2.png/v1/fill/w_560,h_454,al_c,q_85,usm_0.66_1.00_0.01/site%20em%20constru%C3%A7%C3%A3o.webp">
                Em construção...
            </Molde>
            {props.children}
        </div>
    </>)
}

export default Matematico;