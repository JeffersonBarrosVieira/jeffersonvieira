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
                        sempre fui apaixonado por tecnologia, inovação e ciência.
                        Desde pequeno sempre gostei de aprender sozinho e a internet
                        vem se tornando uma grande aliada para isso.
                        Mesmo sendo um aluno exemplar na escola convencional, acredito
                        vigorosamente que o nosso sistema de ensino esteja defasado em relação
                        aos nossos avanços como civilização. 
                    </p>
                </a>
            </div>
        </div>
    )
}

export default Sobre