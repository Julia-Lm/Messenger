import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomePage } from 'pages/home-page';
import { LoginPage } from 'pages/login-page';

const App = () => {
    return (
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/login' component={LoginPage} />
        </Switch>
    )
}

export default App;