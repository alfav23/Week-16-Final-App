import React from "react";
import ReviewForm from "./reviewForm";

export default function Reviews(props){
    const {deleteReview, addReview, reviews} = props;
    console.log(reviews);
    return(
        <div>
            <h4>Reviews</h4>
            <ReviewForm addReview = {addReview}/>
            {/* map out reviews */}
            {reviews.map((review, index) => (
                <div review = {review} key = {index} className="card bg-dark border border-light text-white">
                    <div className="card-title">
                        <h4> Review for {review.show}</h4>
                        <h6 className="m-2 text-start"> by {review.user} </h6>
                        <h6 className="m-2 text-start"> {review.date.toString()}</h6>
                    </div>
                        <p className="m-2">Stars: {review.stars}</p>
                        <p className="card-body">{review.content}</p>
                        <button onClick={deleteReview} className="btn btn-secondary">Delete Review</button>
                </div>
            ))}
        </div>
    )
}