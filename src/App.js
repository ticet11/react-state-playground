import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Align from './pages/Align';
import ChangeColor from './pages/ChangeColor';
import Clock from './pages/Clock';
import Counter from './pages/Counter';
import GuySizer from './pages/GuySizer';
import ShowHide from './pages/ShowHide';
import Toggle from './pages/Toggle';
import FetchData from './pages/FetchData';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/counter' component={Counter} />
        <Route exact path='/toggle' component={Toggle} />
        <Route exact path='/guysizer' component={GuySizer} />
        <Route exact path='/align' component={Align} />
        <Route exact path='/showhide' component={ShowHide} />
        <Route exact path='/clock' component={Clock} />
        <Route exact path='/changecolor' component={ChangeColor} />
        <Route exact path='/fetch-data' component={FetchData} />
      </Switch>
    </Router>
  );
}

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

export default App;
