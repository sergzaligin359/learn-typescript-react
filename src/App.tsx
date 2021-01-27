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
import { SelectTree } from './pages/selectTree/SelectTree';
import { MemoryGame } from './pages/memoryGame/MemoryGame';
import GlobalFeed from './pages/globalFeed';
import Article from './pages/article';
import Authentication from './pages/authentication';
import TopBar from './components/TopBar.js';
import Dnd2Tree from 'pages/dnd2tree/Dnd2Tree';
import ReactSortableTree from 'pages/reactSortableTree/ReactSortableTree';
import BdndTree from 'pages/bDndTree/BdndTree';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <TopBar />
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
          <Route component={SelectTree} path="/select-tree"/>
          <Route component={MemoryGame} path="/memory-game"/>
          <Route component={GlobalFeed} path="/global-feed" exact/>
          <Route component={Article}  path="/global-feed/article/:slug"/>
          <Route component={Authentication}  path="/global-feed/login"/>
          <Route component={Authentication}  path="/global-feed/register"/>
          <Route component={Dnd2Tree}  path="/dnd2tree"/>
          <Route component={ReactSortableTree}  path="/react-sortable-tree"/>
          <Route component={BdndTree}  path="/b-dnd-tree"/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
