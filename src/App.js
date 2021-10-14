import React from "react";
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
//global style
import GlobalStyle from "./components/GlobalStyle";
//pages
import ContectUs from '../src/pages/ContactUs';
import Services from '../src/pages/Services';
//Routter
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path='/' exact>
          <AboutUs />
        </ Route>
        <Route path='/Services'>
          <Services />
        </Route>
        <Route path='/ContactUs'>
          <ContectUs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;