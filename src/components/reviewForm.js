import React, {useState} from "react";

export default function ReviewForm (props) {
    const [user, setUser] = useState('');
    const [stars, setStars] = useState(0);
    const [content, setContent] =useState('');
    const date = new Date();

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(user, stars, content, date)
        // passing values into addReview call for them to be updated and displayed
        props.addReview(user, stars, content, date);
        // reset inputs to empty
        setUser('');
        setStars(0);
        setContent('');
    };

    return(
        <div>
            <form>
                <h6>Review for {"Show"}</h6>
                <label>User</label>
                <input 
                    placeholder="Enter user..."
                    type='text'
                    onChange={(e) => setUser(e.target.value)}
                    value={user}>
                </input>
                <br></br>
                <label>Stars</label>
                <select onSelect={(e) => setStars(e.target.value)} value={stars} defaultValue='0' className="custom-select">
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
                <textarea 
                    placeholder="Enter review..."
                    type='text'
                    onChange={(e) => setContent(e.target.value)}
                    value={content}>
                </textarea>
                <button onSubmit={onSubmit()}></button>
            </form>
        </div>
    )
}