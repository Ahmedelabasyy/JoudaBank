import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Home from './pages/Home';
import SignInPage from './pages/SignIn/signin';

function App() {
  return (
    <Router>
      <Switch>
        <Route  path="/signin" component={SignInPage} />
        <Route  path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
