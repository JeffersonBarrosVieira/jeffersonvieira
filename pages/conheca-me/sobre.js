import React from 'react';
import Link from 'next/link';

const Sobre = () => {
    return(
        <div id="sobre">
            <div className="grid">    
                <div className="card-foto">
                    <div className="foto">
                        <div className="folha">
                        </div>
                    </div>
                </div>
                <a className="card-descricao">
                    <h3>Minha História</h3>
                    <p>
                        Estudate de Física do Instituto Federal de Educação,
                        Ciência e Tecnologia do Maranhão Campus Imperatriz,
                        sempre fui apaixonado por tecnologia ciência e inovação.
                        Desde pequeno sempre gostei de aprender sozinho e a internet
                        só favorece essa concepção, mesmo sendo um ótimo aluno
                        na escola tradicional, acredito fortemente que o nosso
                        sistema de ensino esteja defasado. 
                    </p>
                </a>
            </div>
        </div>
    )
}

export default Sobre