import React from 'react';
import Signup from './pages/auth/signup';
import Signin from './pages/auth/signin';
import HocLogin from './pages/auth/hoc-login';
import Home from './pages/home';
import { PrivateRoute } from './utils/private-router';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle, Container } from './styled';

function App() {
  return (
    <Router>
      <Container>
        <Switch>
          <Route path="/signup" component={HocLogin(Signup)} />
          <Route path="/signin" component={HocLogin(Signin)} />
          <PrivateRoute exact path="/" component={Home} />
          <Route component={() => <h1>Not Found</h1>} />
        </Switch>
        <GlobalStyle />
      </Container>
    </Router>
  );
}

export default App;
