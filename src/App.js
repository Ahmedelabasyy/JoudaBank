import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Home from './pages/Home';
import SignInPage from './pages/SignIn/signin';

function App() {
  return (
    <Router basename={window.location.pathname || ''}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/signin" component={SignInPage} />
      </Switch>
    </Router>
  );
}

export default App;
