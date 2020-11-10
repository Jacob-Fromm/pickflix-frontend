import React from 'react';
import { render } from 'react-dom';
import "./Profile.css"

class LikedMovies extends React.Component {

    state = {
        showBox: false
    }

    handleBoxToggle = () => {
        this.setState({ showBox: !this.state.showBox });
    }

    render() {
    let {poster, title, genre} = this.props.movieObj.movie
    return (
    <div className="flexthis" >
        <li>
            <div 
            style={{ backgroundImage: `url(${poster})` }}
            className={`container${this.state.showBox ? " show" : " pickedcard"}`} onClick={this.handleBoxToggle}>
            {this.state.showBox ? 
                <div className="details">
                    <h1>{title}</h1>
                    <h4>{genre}</h4>
                </div>
                : ""}
                    
            </div>
        </li>
    </div>
    )}

};

export default LikedMovies;