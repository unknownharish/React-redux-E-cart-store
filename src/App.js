import './App.css';
import Header from './myComponents/Header';
import Items from './myComponents/Items';
import ViewItem from './myComponents/ViewItem';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Checkout from './myComponents/Checkout';

function App() {
  return (

    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' >
            <Items />
          </Route>
          <Route exact path='/view_item' >
            <ViewItem />
          </Route>
          <Route exact path='/checkout_cart' >
            <Checkout />
          </Route>
          <Route exact path='/Add_to_cart' >
            <ViewItem />
          </Route>

        </Switch>

      </div>

    </Router>


  );
}

export default App;
