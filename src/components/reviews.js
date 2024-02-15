import React from "react";
import ReviewForm from "./reviewForm";

export default function Reviews(props){
    const {watchlists, addReview, reviews} = props;
    console.log(reviews);
    return(
        <div>
            <h4>Reviews</h4>
            <ReviewForm addReview = {addReview}/>
            {/* map out reviews */}
            {reviews.map((review, index) => (
                <div review = {review} key = {index} className="card bg-dark text-white">
                    <div className="card-title"></div>
                        <h4> Review for {watchlists.show.name}</h4>
                        <h6 className="text-end"> {review.user} </h6>
                        <h6 className="text-end"> {review.date} </h6>
                        <p className="card-body">{review.content}</p>
                </div>
            ))}
        </div>
    )
}