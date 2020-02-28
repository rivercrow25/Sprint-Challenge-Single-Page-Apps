import React from "react";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList'
import WecomePage from './components/WelcomePage'
import CharacterDetails from './components/CharacterDetails'
import { Route, Switch, Link } from 'react-router-dom'


export default function App() {
  return (
    <main>
      <Header />
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/character-list'>Characters</Link>
      </nav>

      <Switch>
        <Route exact path='/'>
          <WecomePage />
        </Route>

        <Route path='/character-list'>
          <CharacterList />
        </Route>
        <Route path='/character-details/:itemId'>
          <CharacterDetails />
        </Route>
      </Switch>
    </main>
  );
}
