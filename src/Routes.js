import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './components/Body/Main/index';
import Contact from './components/Body/Contact/index';
import Posts from './components/posts';

export default () => {
    return(
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/contato" component={Contact} />
            <Route path="/pricing" />

            <Route path="/plus/projects" component={Posts} />
            <Route path="/plus/works" component={Posts} />
            <Route path="/plus/soluctions" component={Posts} />

            <Route path="/plus/:path" component={Posts} />
        </Switch>
    );
}