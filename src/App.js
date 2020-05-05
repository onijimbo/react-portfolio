import React from 'react';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Nav from './components/Nav'
import Footer from './components/Footer'

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path={['/', '/about']}>
            <About />
          </Route>  
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/portfolio'>
            <Portfolio />
          </Route>
        </Switch>
        <Footer className='footer' />
      </div>
      </BrowserRouter>  
  );
}

export default App;
