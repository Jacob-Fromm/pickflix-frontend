import React from 'react';
import { render } from 'react-dom';
import "./Profile.css"

class LikedMovies extends React.Component {

    render() {
    let {poster, title, genre} = this.props.movieObj.movie
    return (
    <div className="flexthis" >
        <li>
            <div 
            style={{ backgroundImage: `url(${poster})` }}
            className="pickedcard" >
            </div>
            <div className="button center">
                <button className="likedmoviebutton">More Info</button>
                <div className="divider"/>
                <button className="likedmoviebutton">Delete Movie</button>
            </div>
        </li>
    </div>
    )}

};

export default LikedMovies;