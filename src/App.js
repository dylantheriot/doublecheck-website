import React from 'react';
import CreateSessionPage from './components/create_session_page/CreateSessionPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DashboardPage from './components/dashboard_page/DashboardPage';

function App() {
  return (
    <Router>
    <Switch>
    <Route exact path='/' component={CreateSessionPage} />
      <Route exact path='/dashboard' component={DashboardPage} />
    </Switch>

    </Router>
  );
}

export default App;
