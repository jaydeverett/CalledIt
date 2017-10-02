import React from 'react';
import { Route, Link } from 'react-router-dom';
import Main from './Main';
import Single from './Single';
import ShowGrid from './ShowGrid';

const App = () => (
  <div>
    <header>
      <Route exact path="/" component={Main}/>
    </header>
    <main>
      <Route exact path="/" component={ShowGrid}/>
      <Route path="/view/:showId" component={Single}/>
    </main>
  </div>
)
export default App;
