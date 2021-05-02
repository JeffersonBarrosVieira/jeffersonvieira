import React from 'react';
import emailjs from 'emailjs-com';

export default function Contato(){
    
    function enviarEmail(e){
        let nome = document.getElementById('nome');
        let sobrenome = document.getElementById('sobrenome');
        let email = document.getElementById('email');
        let telefone = document.getElementById('telefone');
        let assunto = document.getElementById('assunto');
        let mensagem = document.getElementById('mensagem');

        if((nome.value !== "") & (sobrenome.value !== "")){
            if(email.value !== ""){
                if(assunto.value !== ""){
                    if(mensagem.value !== ""){
                        emailjs.sendForm('service_m4egyfn', 'template_7a7p5jr', e.target, 'user_U51ru99l1bbQ9T6nsGLP3')
                            .then((result) =>{
                                console.log(result.text);
                            }, (error) => {
                                console.log(error.text);
                            });
                            e.target.reset();
                        alert('Mensagem enviada!!')
                        nome.value = '';
                        sobrenome.value = '';
                        email.value = '';
                        telefone.value = '';
                        assunto.value = '';
                        mensagem.value = '';
                        e.preventDefault();
                    }else{
                        alert('Insira a mensagem para completar o envio.')
                        e.preventDefault();
                    }
                }else{
                    alert('Insira o assunto da mensagem.')
                    e.preventDefault();
                }
            }else{
                alert(`Olá ${nome.value} ${sobrenome.value}, insira o seu Email de contato.`);
                e.preventDefault();
            }
            
        }else{
            alert("Insira Nome e Sobrenome.");
            e.preventDefault();
        }
        
    }

    return(<>
        <header id="topo">
            <div>
                <a href="../">
                    <img className="seta" src="/img/seta2.png"/>
                </a>
                
                <a><h1 className="nome">Jefferson Barros</h1></a>
            </div>
        </header>
        <div className="pagina-contato">
            <h2>Vamos conversar?</h2>
            {/* <p className="sub-titulo">Olá vamos conversar mais?</p> */}
            
            <div id="contato-container">
                <div className="contato-info">
                    <h4>
                        Informação para Contato
                    </h4>

                    <p>Preencha o formulário e clique em Enviar</p>

                    <div className="icon-text">
                        <i className="fa fa-phone" aria-hidden="true"></i>
                        <span>(99) 99126-2396</span>
                    </div>

                    <div className="icon-text">
                        <i className="fa fa-envelope-o" aria-hidden="true"></i>
                        <span style={{fontSize: '16px'}}>jefferson.negociom03@gmail.com</span>
                    </div>

                    <div className="icon-text">
                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                        <span>Imperatriz, Maranhão</span>
                    </div>

                    <div className="midia-social">
                        <a href="#" className="circulo-icon">
                            <i className="fa fa-facebook-official" aria-hidden="true"></i>
                        </a>
                        <a href="#" className="circulo-icon">
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                        <a href="#" className="circulo-icon">
                            <i className="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                        <a href="#" className="circulo-icon">
                            <i className="fa fa-linkedin" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>

                <form onSubmit={enviarEmail}>
                    <div className="col">
                        <div className="grupo-form">
                            <label>Nome: *</label>
                            <input type="text" id="nome" name="nome"/>
                        </div>
                        <div className="grupo-form">
                            <label>Sobrenome: *</label>
                            <input type="text" id="sobrenome" name="sobrenome"/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="grupo-form">
                            <label>E-Mail: *</label>
                            <input type="email" id="email" name="email"/>
                        </div>
                        <div className="grupo-form">
                            <label>Telefone:</label>
                            <input type="tel" id="telefone" name="telefone"/>
                        </div>
                    </div>
                    <div className="col-1">
                        <div className="vertical">
                            <div className="grupo-form espaco">
                                <label>Assunto:*</label>
                                <input type="text" id="assunto" name="assunto"/>
                            </div>
                            <div className="grupo-form">
                                <input type="submit" className="enviar" value="Enviar"/>
                            </div>
                        </div>
                        <div className="vertical">
                            <div className="grupo-form">
                                <label>Mensagem:*</label>
                                <textarea name="mensagem" id="mensagem"></textarea>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <footer id="rodape-inicial">
            <a href="#" target="_blank" rel="noopener noreferrer">
                Developed by <h4>: Jefferson Barros Vieira</h4>.
            </a>
        </footer>
    </>)
}