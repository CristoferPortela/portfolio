import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return(
        <section className="container pad-top-10 pad-bottom-30">
            <div className="_center-flex">
                <Link to="/plus/intitucionais-blogs" className="flex-lg-5 flex-15 flex-sm-7 margin-10">
                    <div className="pad-20 bg-purple white font-12">
                        Sites institucionais ou blogs
                    </div>
                </Link>
                <Link to="/plus/ecommerce" className="flex-lg-5 flex-15 flex-sm-7 margin-10">
                    <div className="pad-20 bg-purple white font-12">
                        Lojas virtuais (Ecommerce)
                    </div>
                </Link>
                <Link to="/plus/ad" className="flex-lg-5 flex-15 flex-sm-7 margin-10">
                    <div className="pad-20 bg-purple white font-12">
                        Divulgação
                    </div>
                </Link>
                <Link to="/plus/apps" className="flex-lg-5 flex-15 flex-sm-7 margin-10">
                    <div className="pad-20 bg-purple white font-12">
                        Apps
                    </div>
                </Link>
                <Link to="/plus/wp" className="flex-lg-5 flex-15 flex-sm-7 margin-10">
                    <div className="pad-20 bg-purple white font-12">
                        Tema wordpress personalizado
                    </div>
                </Link>
                <Link to="/plus/maintenance" className="flex-lg-5 flex-15 flex-sm-7 margin-10">
                    <div className="pad-20 bg-purple white font-12">
                        Atualização/ manutenção
                    </div>
                </Link>
            </div>
        </section>
    );
}