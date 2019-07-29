import React from 'react';
import NavBar from './components/NavBar'
import Notes from './components/Notes'
import Home from './components/Home'
import AddNote from './components/AddNote'
import EditNote from './components/EditNote'
import RemoveNote from './components/RemoveNote'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './assets/css/bootstrap.min.css'

function App() {
  return (
    <Router>
      <div className="App">

        <NavBar/>
        <Switch>
        <Route exact path="/" component={ Home }/>
          <Route path="/notes" component={ Notes }/>
          <Route path="/edit/:id" component={ EditNote }/>
          <Route path="/addnote" component={ AddNote }/>
          <Route path="/:id/delete" component={ RemoveNote }/>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
