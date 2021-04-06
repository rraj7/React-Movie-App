import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"; 
import Header from './Components/Header/Header';
import SimpleBottomNavigation from './Components/MainNav';
import { Container } from "@material-ui/core";

import Movies from "./Routes/Movies/Movies";
import Series from "./Routes/Series/Series";
import Trending from "./Routes/Trending/Trending";
import Search from "./Routes/Search/Search";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <div className='app'>
        <Container>
          <Switch>
            <Route path="/" component={Trending} exact />
            <Route path="/movies" component={Movies} />
            <Route path="/series" component={Series} />
            <Route path="/search" component={Search} />
          </Switch>
        </Container>  
      </div>
      <SimpleBottomNavigation/>
    </BrowserRouter>
  );
}

export default App;
