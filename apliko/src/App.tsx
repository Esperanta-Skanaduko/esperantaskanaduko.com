import React from 'react';
import {  BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './Paĝoj/landingPage/landingPage'
import Eldonoj from './Paĝoj/eldonoj/eldonoj';
import PDFPage from './Paĝoj/PDFPage/PDFPage';



function App() {
  return (
    <>
    <Router>

    <Switch>
    <Route  exact path="/" component={LandingPage}>
      <LandingPage />
    </Route>

    <Route exact path="/eldonoj" component={Eldonoj}>
      <Eldonoj />
    </Route>
    
    <Route exact path="/PDFPage" component={PDFPage}>
      <PDFPage />
    </Route>
    
  </Switch>
    </Router>
    </>
  //   <div className="App">
  //     <header className="App-header">
  //       {/* <img src={logo} className="App-logo" alt="logo" /> */}
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
   );


}

export default App;
