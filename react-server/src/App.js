import './App.css';
import React from 'react'
import Header from './components/Header';
import {BrowserRouter  as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Create from './components/Create';
import Navbar from './components/Navbar';
const App = () => {
  return (
    <div>
       <Router>
         <Header />
           <Switch >
             <Route path="/" exact component={Home}></Route>
             <Route path="/Create"  component={Create}></Route>
           </Switch>  
       </Router>
    </div>
  )
}

export default App
