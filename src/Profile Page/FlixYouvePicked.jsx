import React from 'react';
import LikedMovies from './LikedMovies';
import "./Profile.css"

class FlixYouvePicked extends React.Component {

    state= {
        likedMovies: []
    }
    
    componentDidMount = () => {
        fetch("http://localhost:3000/liked_movies")
        .then(resp => resp.json())
        .then((likedMoviesArray) => {
            this.setState({
            likedMovies: likedMoviesArray.filter(obj => obj.user.id === this.props.currentUser.user.id)
            })
        })
    }

    deleteMovie = (movieObjId) => {
        let updatedLikedMovies = this.state.likedMovies.filter((movieObj) => {
        return movieObj.id != movieObjId
        })
        this.setState({
            likedMovies: updatedLikedMovies
        })
    }
    
    allLikedMovies = () => {
        return this.state.likedMovies.map((movieObj) => <LikedMovies key={movieObj.id} currentUser={this.props.currentUser} movieObj={movieObj} deleteMovie={this.deleteMovie}/> )
    }

    render() {
    return (
    <div>
        <h1>FlixYouvePicked</h1>
        <ul className="cardContainer" >
            {this.allLikedMovies()}
        </ul>
    </div>
    )}

};

export default FlixYouvePicked;