import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import LandingPage from "./components/LandingPage/LandigPage";
import Home from "./components/Home/Home";
import Details from "./components/Details/Details"
import Create from "./components/Create/Create"


function App() {
  return (
  <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/home' component={Home} />
        <Route  path='/videogames/:id' component={Details} />
        <Route path='/createGame' component={Create} />
      </Switch>
    </div>
  </BrowserRouter>
  );
} 

export default App;
