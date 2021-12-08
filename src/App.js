import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import AnimeList from './components/animeList';
import Anime from './components/anime'

import './App.css';
import AnimeHeader from './components/animeHeader';

function App() {

  

  return (
    <div className="App">
      <AnimeHeader />
      <Switch>

        <Route path="/anime/:id">
          <Anime />
        </Route>

        <Route path="/anime">
          <AnimeList />
        </Route>

        <Route path="/">
          <Redirect to="/anime" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;