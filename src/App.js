import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from './Pages/Main';
import About from './Pages/About';
import Projects from './Pages/Projects';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/about" component={About} />
      <Route exact path="/projects" component={Projects} />
    </Switch>
  );
}

export default App;
