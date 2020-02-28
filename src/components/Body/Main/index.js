import React from 'react';
import '../style.sass';
import BoxText from '../BoxText';
import Services from '../Services';
import success from '../../../assets/me-you-success.png';

export default () => {
    React.useEffect(() => window.scrollTo(0,0));

    return(
        <article>
            <BoxText 
            classes="row-flex _center bgprimary" 
            title="Como podemos colaborar?"
            titleClass="center flex-lg-16 fire shadow light-weight"
            >    
                <div className="flex-lg-6 margin-top-30 _center-flex">
                    <img src={success} className="full-size rounded" alt="me + you = success"/>
                </div>
                <div className="flex-lg-7 pad-top-20 container">
                    <p className="justify grey-ccc">
                        "Colaborar", é uma palavra muito boa e que eu gosto muito de
                        usar, poderia simplesmente dizer "Me contrate", "Por que me escolher?",
                        mas "colaborar" é muito melhor! Por quê?
                        <br/><br/>
                        Isso mostra que ambos somos importantes nesse trabalho, não 
                        é algo sobre mim, nem sobre você, mas tem um conjunto de fatores
                        inclusos na "colaboração",
                        não diz uma simples relação de que eu vou prestar um serviço
                        a você e esse é o fim tudo, mas sim que podemos nos ajudar.
                    </p>
                    <p className="justify grey-ccc">
                        Em seguida, veja minhas propostas e note que nenhuma tem
                        como base uma proposta vaga e que envolve somente a mim, 
                        mas todas tem um diferencial, veja, por exemplo, as 
                        propostas de <strong className="grey-ccc">Ecommerce</strong>,
                        nenhuma vem só com o modelo da loja online, mas elas já
                        incluem marketing, aliás, o que é uma loja se ninguém
                        conhece? Essa é a minha parte, fazer/criar da melhor forma e 
                        divulgar, mas se estamos colaborando, qual é sua parte?<br/>
                        Simples, não me deixar sozinho! Dizer o que quer! Fechar
                        os olhos e falar o site, ou app dos seus sonhos, será que
                        ele é da cor azul? Tem um botão que faz tal coisa? Isso
                        me ajuda a dar meu melhor, ser único e uma escolha ótima!
                    </p>
                </div>
            </BoxText>

            <BoxText 
            classes="row-flex bgsecondary _center" 
            title="Mapa do tesouro"
            titleClass="center indigo light-weight">
                <i className="material-icons indigo margin-left-10 font-26">satellite</i>
                <div className="flex-lg-16"></div>
                <div className="container flex-lg-9">
                    <p className="">
                        Veja no mapa do tesouro qual "baú" se encaixa mais nas suas 
                        necessidades atuais. Será que o tesouro que procura é um Ecommerce?
                        Ou um site institucional? Ou ainda outro das opções abaixo?
                        É só clicar naquele que mais lhe agradar
                    </p>
                </div>
                
                {/*/<TeasureBox content={my_works} />/*/}
                <Services/>

            </BoxText>
        </article>
    );
}