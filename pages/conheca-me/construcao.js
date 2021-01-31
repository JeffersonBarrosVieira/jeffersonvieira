import React from 'react';
import Link from 'next/link';

const Construcao = () => {
    return(
        <div className="construcao">
            <div className="fundo">
                <h1>Página em construção...</h1>
                
                <Link href="/">
                    <a>[Voltar para a pagina inicial]</a>
                </Link>
            </div>
        </div>
    )
}

export default Construcao