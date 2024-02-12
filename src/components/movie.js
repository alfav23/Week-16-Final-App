import React from 'react';
import Review from './review';
import ReviewForm from './reviewForm.js';

// to determine date
let date = new Date();

// main component that will hold all movie components

export default class Movie extends React.Component {
    constructor(props){
        super(props);
        console.log('movie props:', props);
        // reviews array
        this.state = {
            reviews: [
            // {
            //   userName: 'alyssaf2000',
            //   time: date.toDateString(),
            //   reviewText: 'This movie was boring.',
            //   stars: 2,
            // },
            // {
            //   userName: 'notthesamepersonipromise',
            //   time: date.toDateString(),
            //   reviewText: 'I also thought this movie was boring.',
            //   stars: 1,
            // },
            // {
            //   userName: 'yetanotheruser',
            //   time: date.toDateString(),
            //   reviewText: 'I liked this one.',
            //   stars: 5,
            // },
          ]
        };

        // binding it to this specific class (in THIS movie)
        this.changeState = this.changeState.bind(this);
        this.movieList = props.movies;

        // testing data
            console.log(this.movieList);
            console.log(props);
    }

    changeState = (reviewData) => {
        console.log('State has been changed:', reviewData);
        this.setState(prevState => ({reviews: [...prevState.reviews, reviewData]}));
    }
    
    render() {
        return (
            <div>
                <div id='movie-cards' width='10rem' className='card bg-light text-secondary'>
                    {/* populating movie cards with properties from movie list */}
                    <img className='card-img-top' src={this.props.movies.imgURL} alt='Movie poster'/>
                    <h5 className='card-title'>{this.props.movies.movieName}</h5>
                    <p className='card-body'>Synopsis: <br></br> {this.props.movies.movieSynopsis}</p>
                    {/* inserting review form component as a card within movie card */}
                    {/* takes reviews and movies as well as change state function for holding review info */}
                    <ReviewForm reviews = {this.state.reviews} movie = {this.props.movies} changeState={this.changeState} />
                    <h5 className='text-start' >Reviews:</h5>
                    {/* mapping reviews to display on each movie card upon user submission */}
                    {this.state.reviews.map((review, index)=>(
                      <Review key={index} review = {review} />  
                    ))}
                    </div>
            </div>
        )
    }
}