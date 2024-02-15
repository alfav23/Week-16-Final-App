import React from 'react';
import './App.css';
import WatchlistArray from './components/watchlistArray';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes, Link, useRouteMatch } from 'react-router-dom';
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

  addReview = (user, stars, content, date) => {
    const updatedReviews = {
    ...this.state, reviews: [...this.state.reviews, {user: user, stars: stars, content: content, date: date}]
    };
    this.setReviews(updatedReviews);
    console.log(`Updated Reviews`, updatedReviews);
    return updatedReviews;
};
  render(){
    return(
      <div>
        <BrowserRouter>
          <NavBar />
            <Routes>
              <Route path="/home" element={<Home />}>
              </Route>
              <Route path="/watchlists" element={<WatchlistArray/>}>
              </Route>
              <Route path="/reviews" element={<Reviews addReview={this.addReview} reviews={this.state.reviews}/>}>
              </Route>
            </Routes>
        </BrowserRouter>
      </div>
    );
  }
}