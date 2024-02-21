import React, {useState} from "react";

export default function ReviewForm (props) {
    const [show, setShow] = useState('');
    const [user, setUser] = useState('');
    const [stars, setStars] = useState(0);
    const [content, setContent] = useState('');
    const date = new Date();

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(show, user, stars, content, date)
        // passing values into addReview call for them to be updated and displayed
        props.addReview(show, user, stars, content, date);
        // reset inputs to empty
        setShow('');
        setUser('');
        setStars('0');
        setContent('');
    };

    return(
        <div>
            <form className=" review-form form-control bg-dark text-white">
                <h6>Create A Review</h6>
                <label>Show</label>
                <input
                    placeholder="Enter show name..."
                    type="text"
                    onChange={(e) => setShow(e.target.value)}
                    value={show}>
                </input>
                <br></br>
                <label>User</label>
                <input 
                    placeholder="Enter user..."
                    type='text'
                    onChange={(e) => setUser(e.target.value)}
                    value={user}>
                </input>
                <br></br>
                <label>Stars</label>
                <select onChange={(e) => setStars(e.target.value)} defaultValue={stars} className="custom-select">
                        {/* options correspond to values to later populate in  review  */}
                        <option value='0'>Choose...</option>
                        <option value="1">⭐</option>
                        <option value="2">⭐⭐</option>
                        <option value="3">⭐⭐⭐</option>
                        <option value="4">⭐⭐⭐⭐</option>
                        <option value="5">⭐⭐⭐⭐⭐</option>
                    </select>
                <br></br>
                <label>What did you think?</label>
                <br></br>
                <textarea 
                    className="review-content rounded-3"
                    placeholder="Enter review..."
                    type='text'
                    onChange={(e) => setContent(e.target.value)}
                    value={content}>
                </textarea>
                <br></br>
                <button className="btn btn-light" onClick={onSubmit}>Post Review</button>
            </form>
        </div>
    )
}