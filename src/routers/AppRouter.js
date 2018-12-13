import React from 'react';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import Home from '../components/Home';
import NotFoundPage from '../components/NotFoundPage';



const AppRouter = () =>(
    <Router >
    <div>
     
    <Switch>
    <Route path='/' component={Home}  exact={true}  />
    
    <Route  component={NotFoundPage} />
    </Switch>
    </div>
    </Router>

);

export default AppRouter;