// star rating component
import React from 'react';

export default class Stars extends React.Component {
    constructor(props){
    super(props);
    console.log('These are the props in stars', props);
    }
        render(){
        return(
            <div id='stars'>
                <form>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="inputGroupSelect">Stars</label>
                    </div>
                    {/* unique id for inputs using movie id so that each instance can act independently  */}
                    <select defaultValue='0' className="custom-select" id={`inputGroupSelect-${this.props.movie.id}`}>
                        {/* options correspond to values to later populate in  review  */}
                        <option value='0'>Choose...</option>
                        <option value="1">⭐</option>
                        <option value="2">⭐⭐</option>
                        <option value="3">⭐⭐⭐</option>
                        <option value="4">⭐⭐⭐⭐</option>
                        <option value="5">⭐⭐⭐⭐⭐</option>
                    </select>
                </div>
               </form> 
            </div>
        )
    }
}