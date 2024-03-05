import React from 'react';
import './App.css';
import WatchlistArray from './components/watchlistArray';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Reviews from './components/reviews';
import NavBar from './components/navBar';
import Home from './components/home';


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      reviews:[]
    }
    console.log(this.state);
  }
  
  // review functions, add and delete reviews from this.state.reviews array
  addReview = (show, user, stars, content, date) => {
    const updatedReviews = {
    ...this.state, reviews: [...this.state.reviews, {show: show, user: user, stars: stars, content: content, date: date}]
    };
    this.setState(updatedReviews);
    console.log(`Updated Reviews`, updatedReviews, this.state.reviews);
    return updatedReviews;
  };

  deleteReview = (index) => {
    const updatedReviews = [this.state.reviews];
    updatedReviews.splice(index, 1);
    this.setState({reviews: updatedReviews})
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
              <Route path="/reviews" element={<Reviews deleteReview={this.deleteReview} addReview={this.addReview} reviews={this.state.reviews}/>}>
              </Route>
            </Routes>
        </BrowserRouter>
      </div>
    );
  }
}