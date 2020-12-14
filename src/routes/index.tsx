import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from 'pages/Loginpage';
import HomePage from 'pages/Homepage';

const Routes = () => {

    return(
        <Switch>
            <Route path='/homepage' component={HomePage} />
            <Route path='/' exact component={LoginPage} />
        </Switch>
    );
};

export default Routes;