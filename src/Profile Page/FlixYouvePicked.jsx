import React from 'react';
import "./Profile.css"

class FlixYouvePicked extends React.Component {

    state= {
        likedMovies: [],
    }
    
    componentDidMount = () => {
        fetch("http://localhost:3000/liked_movies")
        .then(resp => resp.json())
        .then((likedMoviesArray) => {
            this.setState({
            likedMovies: likedMoviesArray
            })
        })
    }

    render() {
    return (
    <div>
        <h1>FlixYouvePicked</h1>
        <div className="cardContainer" >
            {this.state.likedMovies.map(likedMovie => (
                <div className="flexthis">
                    <div 
                    style={{ backgroundImage: `url(${likedMovie.movie.poster})` }}
                    className="pickedcard">
                        <h1>{likedMovie.movie.title}</h1>
                        <h4>{likedMovie.movie.genre}</h4>
                    </div>
                </div>
            ))}
            </div>
        
    </div>
    )}

};

export default FlixYouvePicked;