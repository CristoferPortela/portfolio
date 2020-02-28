import React from 'react';
import FooterText from './FooterText';

export default () => {
    return(
        <footer className="bgprimary pad-top-50 pad-bottom-50">
            <article className="container row-flex">
                <FooterText title="Quem sou eu?">
                        Meu nome é Cristofer, nasci em Curitiba - PR,
                        desde criança gosto de estudar física, matemática,
                        astronomia e tecnologias no geral. Comecei com a programação
                        em 2017 e desde então tenho estudado e aprendido sobre
                        a área cada vez mais, admito, por bastante tempo fiquei
                        muito perdido, não sabia o que fazer nem o que estudar
                        e quanto mais pesquisava, menos eu entendia, até
                        chegar no desenvolvimento de sites, que é onde
                        estou até hoje.
                </FooterText>
                <FooterText title="Formação acadêmica">
                        Embora isso geralmente não seja considerado na área de TI, 
                        acho importante pelo menos deixar como informação extra, 
                        atualmente curso Sistemas para Internet na UTFPR, inicei 
                        com o objetivo de aprender mais, mesmo que já soubesse 
                        desenvolvimento de sistemas antes de iniciar, digo que estou 
                        aprendendo coisas que não aprenderia sem ele, como estrutura
                        de dados, engenharia de software, conceitos mais aprofundados 
                        de Orientação a Objetos e etc.
                </FooterText>
            </article>
        </footer>
    );
}