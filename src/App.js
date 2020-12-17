import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './components/auth/Login/Login';
import NewAccount from './components/auth/NewAccount/NewAccount';
import Projects from './components/projects/Projects';

function App() {
  return (
    <Router>
      {/* Anything outside Switch but inside Router will be shared between all different pages in our web app */}
      <Switch>
        {/* Here the diferent pages of our web app are defined */}
        <Route exact path='/' component={Login} />
        <Route exact path='/new_account' component={NewAccount} />
        <Route exact path='/projects' component={Projects} />
      </Switch>
    </Router>
  );
}

export default App;
