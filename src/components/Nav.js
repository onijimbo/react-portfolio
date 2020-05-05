import React from 'react';
import { Link } from "react-router-dom";
// import About from '../pages/About';
// import Contact from '../pages/Contact';
// import Portfolio from '../pages/Portfolio';


function Nav (){
    return (
        <div class="container" id="header">

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <h1 id="name">Riley Hall</h1>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            {/* <BrowserRouter>  */}
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <Link id='anchor' to='/about'>About</Link>
              </li>
              <li class="nav-item">
                <Link id='anchor' to='/portfolio'>Portfolio</Link>
              </li>
              <li class="nav-item">
                <Link id='anchor' to='/contact'>Contact</Link>
              </li>
    
            </ul>
            
    
        {/* <Switch>
          <Route exact path = {['/', '/about']}>
            <About />
          </Route>  
          <Route path={'/contact'}>
            <Contact />
          </Route>
          <Route path = {'/portfolio'}>
            <Portfolio />
          </Route>
        </Switch> */}

    
      
            {/* </BrowserRouter>  */}
          </div>
        </nav>
      </div>
    )
}

export default Nav;