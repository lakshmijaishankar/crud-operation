import logo from './logo.svg';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Searchfood from './components/Searchfood';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Fooddetails from './components/Fooddetails';
function App() {
  return (
   <BrowserRouter>
    <Navbar/>
    <Switch>
      <Route path="/searchfood:name">
        <Searchfood/>
      </Route>
      <Route path="/" exact>
        <Home/>
      </Route>
      <Route path="/foodDetails:id">
        <Fooddetails/>
      </Route>
    </Switch>
   </BrowserRouter>
  );
}

export default App;
