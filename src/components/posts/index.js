import  React from 'react';
import './style.sass';
import { useParams } from 'react-router-dom';
import blog from '../../blog';

export default () => {

    React.useEffect(() => window.scrollTo(0,0));

    let location = useParams();

    const post = blog[location.path];

    return(
        <div className="row-flex blog pad-top-10 margin-top-10 pad-bottom-30">
            <article className="post flex-lg-11">
                <h3 className="font-lg center margin-10 light-weight">
                   { post.title } 
                </h3>
                { post.content }
            </article>
            <aside className="flex-lg-4 margin-top-50">
                <section>
                    <h3 className="font-md light-weight">
                        Vamos conversar sobre softwares?
                    </h3>
                    <div className="margin-top-20">
                        <p>
                            Quer um site para sua empresa? Um Blog? Um App? Um sistema de 
                            gerenciamento para sua empresa? Por quê não marcamos uma reunião,
                            pelo skype ou conversamos pelo <a target="_blank" href="https://api.whatsapp.com/send?phone=5542984179233&text=Vamos%20conversar%20sobre%20sites" rel="noopener noreferrer">
                            whatsapp</a> ou pela <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com">página do facebook</a>?
                        </p>
                    </div>
                </section>
            </aside>
        </div>
    );
}