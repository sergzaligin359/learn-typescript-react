import './App.css'
import React from 'react'
import { NavBar } from './components/NavBar'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Todo } from './pages/Todo';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { TestTSOmitHoc } from './pages/TestTSOmitHoc';
import { SetData } from './pages/SetData';
import { UpdateUser } from './pages/UpdateUser';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="container">
        <Switch>
          <Route component={SetData} path="/set-data"/>
          <Route component={Home} path="/" exact={true} />
          <Route component={TestTSOmitHoc} path="/redux-ts-omit-hoc" />
          <Route component={Todo} path="/todo" />
          <Route component={About} path="/about"/>
          <Route component={UpdateUser} path="/update-user/:id"/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
