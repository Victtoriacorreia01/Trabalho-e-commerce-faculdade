import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; 
import Home from './components/pages/Home'
import Contato from './components/pages/Contato'
import Company from './components/pages/Company'
import Novidades from './components/pages/Novidades'
import Cart from './components/Cart/Cart'
import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <Router>
   <Navbar/>
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
        <Route>
          <Cart />
        </Route>
        </Container>
      </Switch>
      <Footer/> 
    


    </Router>
  );
}

export default App;
