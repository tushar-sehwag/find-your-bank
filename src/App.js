import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import AllBanks from './view/AllBanks';
import BankDetails from './view/BankDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/all-banks" component={AllBanks} />
        <Route path="/bank-details/:bank_id" component={BankDetails} />
        <Redirect from="/" to="/all-banks" />
      </Switch>
    </Router>
  );
}

export default App;
