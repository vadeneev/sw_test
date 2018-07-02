import React from 'react';
import ReactDOM from 'react-dom';
import {Hello} from './app/Containers/hello.jsx';
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";


const BasicExample = () => (    
    <Router>
      <nav className="crumbs">
        <ul className="link-container">
          <li className = "link-container__item">
            <NavLink  activeClassName="link--active" to="cacheFirst">cacheFirst</NavLink>
          </li>
          <li className = "link-container__item">
            <NavLink  activeClassName="link--active" to="networkFirst">networkFirst</NavLink>
          </li>
          <li className = "link-container__item">
            <NavLink  activeClassName="link--active" to="cacheOnly">cacheOnly</NavLink>
          </li>
        </ul>
            <Switch>
                <Route path="/cacheFirst" component={() => <Hello worker="cacheFirst"/>}/>
                <Route path="/networkFirst" component={() => <Hello worker="networkFirst"/>}/>
                <Route path="/cacheOnly" component={() => <Hello worker="cacheOnly"/>}/>
                <Route path="*" component={Hello}/>
            </Switch>        
      </nav>
      </Router>
  );


ReactDOM.render(
    <BasicExample/>,
    document.getElementById('app')
);

