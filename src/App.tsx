import './App.css'
import "antd/dist/antd.css";
import React from 'react'
import { NavBar } from './components/NavBar'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Todo } from './pages/todos/Todo';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { TestTSOmitHoc } from './pages/TestTSOmitHoc';
import { SetData } from './pages/SetData';
import { UpdateUser } from './pages/users/UpdateUser';
import { CreateUser } from './pages/users/CreateUser';
import { CreateArticle } from './pages/articles/CreateArticle';
import { UpdateArticle } from './pages/articles/UpdateArticle';
import { Count } from './pages/Count';
import { Tasks } from './pages/tasks/Tasks';
import { CandidateCard } from './pages/candidateCard/CandidateCard';
import { TableFieldEditable } from './pages/tableFieldEditable/TableFieldEditable';
import { TableFieldEditableInput } from './pages/tableFieldEditableInput/TableFieldEditableInput';

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
          <Route component={CreateUser} path="/create-user"/>
          <Route component={UpdateArticle} path="/article/update/:id"/>
          <Route component={CreateArticle} path="/article/new"/>
          <Route component={Count} path="/count"/>
          <Route component={Tasks} path="/tasks"/>
          <Route component={CandidateCard} path="/candidate-card/:id"/>
          <Route component={TableFieldEditable} path="/table-field-editable"/>
          <Route component={TableFieldEditableInput} path="/table-field-editable-input"/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
