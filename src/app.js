import React from 'react';
import ReactDOM from 'react-dom';



import 'normalize.css/normalize.css';
import './styles/styles.scss';

import AppRouter from './routers/AppRouter';
import Home from './components/Home';

console.log("start app");



const jsx = (
    
         <AppRouter />
   
)


ReactDOM.render(jsx, document.getElementById('app'));