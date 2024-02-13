import React from "react";
import ReviewForm from "./reviewForm";
import Watchlist from "./watchlist";

export default function Reviews(props){
    const {watchlists, reviews, addReview} = props;
    console.log(reviews)
    return(
        <div>
            <h4>Reviews</h4>
            <ReviewForm addReview = {addReview}/>
            {/* map out reviews */}
            {reviews.map((review, index) => (
                <div review = {review} key = {index} className="card bg-dark text-white">
                    <div className="card-title"></div>
                        <h4> Review for {watchlists.shows.name}</h4>
                        <h6 className="text-end"> {reviews.user} </h6>
                        <h6 className="text-end"> {reviews.date} </h6>
                        <p className="card-body">{reviews.content}</p>
                </div>
            ))}
        </div>
    )
}