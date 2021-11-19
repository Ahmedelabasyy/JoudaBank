import './App.css';
import {HashRouter as Router, Route, Switch} from "react-router-dom"
import Home from './pages/Home';
import SignInPage from './pages/SignIn/signin';

function App() {
  return (
    <Router>
      <Switch>
        <Route  path="/" exact component={Home} />
        <Route  path="/signin" component={SignInPage} />
      </Switch>
    </Router>
  );
}

export default App;
