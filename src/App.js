import { BrowserRouter as Switch, Router, Route, Link } from 'react-router-dom';
import Home from './components/pages/Home'
import Contato from './components/pages/contato'
import Company from './components/pages/Company'
import Novidades from './components/pages/novidades'
import Container from './layout/Container'
function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/company">Contato</Link>
        <Link to="/contato">Company</Link>
        <Link to="/novidades">Novidades</Link>
      </div>
      <Switch>
        <Container customClass="min-height">
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/company">
          <Company/>
        </Route>
        <Route exact path="/contato">
          <Contato/>
        </Route>
        <Route exact path="/novidades">
          <Novidades/>
        </Route>
        </Container>
      </Switch>
    </Router>
  );
}

export default App;
