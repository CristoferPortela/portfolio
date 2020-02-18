import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './components/Body/Main';

export default () => {
    return(
        <Switch>
            <Route path="/" exact component={Main} />
        </Switch>
    );
}