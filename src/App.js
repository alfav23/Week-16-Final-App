import React from 'react';
import './App.css';
import WatchlistArray from './components/watchlistArray';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch, Link, useRouteMatch } from 'react-router-dom';
import Reviews from './components/reviews';
import NavBar from './components/navBar';
import Home from './components/home';

// edit App function to be a class and export
export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      reviews:[]
    }
  }
  render(){
    return(
      <div>
        <BrowserRouter>
        <NavBar />
        <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/watchlists">
              <WatchlistArray />
            </Route>
            <Route path="/reviews">
              <Reviews reviews = {this.state.reviews}/>
            </Route>
          </Switch>
          </BrowserRouter>
      </div>
    );
  }
}