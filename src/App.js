import React from 'react';
import './App.css';
import { Switch, Route} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import SignInSignUp from './components/SignInSignUp'

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/" component={LandingPage}/>
      <Route path="/signin" component={SignInSignUp} />
      </Switch>
    </div>
  );
}

export default App;
