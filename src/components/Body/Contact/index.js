import React from 'react';
import './style.sass';
import BoxText from '../BoxText';

export default () => {
    React.useEffect(() => window.scrollTo(0,0));

    return(
        <article>
            <BoxText title="Vamos bater um papo?" titleClass="center flex-lg-16" classes="_center row-flex">
                <div className="flex-lg-12 margin-20">
                    <p>
                        Quem não gosta de uma boa conversa? Se se interessou pelo conteúdo
                        e meu trabalho, por quê não conversarmos mais? Pode me enviar um email,
                        falar pela página do facebook ou até por whatsapp para agendarmos um
                        horário bom para ambos a fim de falarmos sobre negócios.
                    </p>
                    <small>
                        P.S. Para mandar um email, fazer uma ligação ou apenas marcar
                        meu número, pode simplesmente clicar no pequeno telefone no canto
                        inferior direito da tela, ok?
                    </small>
                </div>

                <div className="_center row-flex flex-lg-16">
                    <div className="flex-lg-4 margin-bottom-20">
                        <h3>
                            Por telefone
                        </h3>
                        <p className="pad-right-20 justify">
                            Hoje em dia os celulares tem grande espaço... em todas as áreas,
                            nada mais justo que conversarmos por ele, seja por ligação, seja por 
                            whatsapp
                        </p>
                        <a rel="noreferrer noopener" href="tel:40028922" className="row-flex items-center">
                            <i className="material-icons contact-circle tel">phone</i>(42) 98417-9233
                        </a>
                        <br/>
                        <a rel="noreferrer noopener" href="https://api.whatsapp.com/send?phone=5542984179233&text=Vamos%20falar%20sobre%20neg%C3%B3cios!">
                            <i className="material-icons contact-circle whatsapp">phone</i> Por WhatsApp
                        </a>
                    </div>
                    <div className="flex-lg-4 margin-bottom-20">
                        <h3>
                            Email
                        </h3>
                        <p className="pad-right-20 justify">
                            O email nos trás uma ideia de formalidade, ainda um meio de
                            comunicação largamente usado, podemos combinar uma data
                            de reunião via skype ou outra rede de seu interesse por email, 
                            o que acha?
                        </p>
                        <a  rel="noreferrer noopener" href="mailto:cristoferportela@gmail.com" className="row-flex items-center">
                        <i className="material-icons email">email</i> cristoferportela@gmail.com
                        </a>
                    </div>
                    <div className="flex-lg-4 margin-bottom-20">
                        <h3>
                            Paǵina do facebook
                        </h3>
                        <p className="pad-right-20 justify">
                            Também é possível termos uma conversa pela maior rede social
                            do mundo! O facebook com seu sistema de chat nos permite conversar
                            com privacidade e de uma forma já conhecida!
                        </p>
                        <a rel="noreferrer noopener" href="https://facebook.com/cristofer-portela" className="row-flex items-center">
                            <span className="facebook">f</span> Página do facebook
                        </a>
                    </div>
                </div>
            </BoxText>
        </article>
    );
}