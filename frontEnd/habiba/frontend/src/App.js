import './App.css';
import CardsPage from './page1/CardsPage';

import * as ROUTES from './constants/routes';

import {BrowserRouter as Router, Switch,  Route} from 'react-router-dom';
function App() {
  return (
    <>
   <Router>
      <Switch>

        <Route path={ROUTES.CardsPage} component={CardsPage} />

      </Switch>
    </Router>
  
    </>
  );
}

export default App;
