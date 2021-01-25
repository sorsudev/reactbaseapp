import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import "./styles/style.scss";
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Home from './componentes/home/Home';
import Nosotros from './componentes/nosotros/Nosotros';
import Servicios from './componentes/servicios/Servicios';
import Contacto from './componentes/contacto/Contacto';

ReactDOM.render(
  <Router>
	    <div>
	    	<Switch>
		        <Route exact path='/' component={Home} />
		        <Route path='/nosotros' component={Nosotros} />
		        <Route path='/servicios' component={Servicios} /> 
		        <Route path='/contacto' component={Contacto} /> 
	      	</Switch>
	    </div>
    </Router>,
  document.getElementById('root')
);

reportWebVitals();