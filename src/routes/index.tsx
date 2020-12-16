import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from 'pages/Loginpage';
import HomePage from 'pages/Homepage';
import Postcreatepage from 'pages/Postcreatepage';

const Routes = () => {

    return(
        <Switch>
            <Route path='/post/create' component={Postcreatepage} />
            <Route path='/homepage' component={HomePage} />
            <Route path='/' exact component={LoginPage} />
        </Switch>
    );
};

export default Routes;
