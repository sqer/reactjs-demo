import React, { Suspense } from 'react';
import './App.css';
import Header from './template/Header';
import Main from './template/Main';
import Footer from './template/Footer';
import { BrowserRouter as Router } from "react-router-dom";
import {MyCustomContext} from "./Context";

class App extends React.Component {

  // MyCustomContext provider will change default context
  // value defined in Context.js file

  // Router tag enclose whole app to allow usage of router link in header and main conent

  render() {
    return (
      <div className="App">
        <MyCustomContext.Provider value="My custom value 2">
        <Suspense fallback="loading">
          <Router>
            <Header />
            <Main />
            <Footer />
          </Router>
          </Suspense>
        </MyCustomContext.Provider>
      </div>
    );
  }
}

export default App;
