import React from 'react';
import TinderCard from 'react-tinder-card';
import "./TinderCards.css"
// import jake from "../../jake head.png"
// import sean from "../../sean head.png"
// import hasibul from "../../hasibul head.png"



class TinderCards extends React.Component {

    state= {
        movies: [],
        likedArray: [],
        lastDirection: ""
    }
    
    componentDidMount = () => {
        fetch("http://localhost:3000/movies")
        .then(resp => resp.json())
        .then((moviesArray) => {
            this.setState({
            movies: moviesArray.sort(() => Math.random() - Math.random()).slice(0, 100).filter(movie => movie.country === "USA" && movie.language === "English")
            })
        })
    }

    addLikedMovie = (movie) => {
        let likedMovieObj = {
            user_id: 1,
            movie_id: movie.id
        }
        const options = {
            method: "POST", 
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            },
            body: JSON.stringify(likedMovieObj)
        }
        fetch("http://localhost:3000/liked_movies", options)
        .then(resp => resp.json())
        .then(console.log("working"))
    }
    
    swipeHandler = (dir, movie) => {
        if(dir === 'right') {
            console.log("Right is Might", movie)
            this.setState((prevState) => ({
                likedArray: [...prevState.likedArray, movie],
                lastDirection: dir
            }))
            this.addLikedMovie(movie)
        }
        else {
            movie.priority -= 1
            console.log(movie.priority)
            this.setState({ lastDirection: dir})
        }
    }

    render() {
        // let someMovies = this.state.movies.splice(25, 50)
        // console.log(this.state.testArray)
    return (
        <div className="root">
            <div>
                {this.state.lastDirection === 'right' ? <div className="flex"><h2 className='infoText'>Added to Liked Movies!</h2></div> : this.state.lastDirection === 'left' ? <div className="flex"><h2 className='infoText'>That Movie Sucked!</h2></div> : <h2 className='infoText'>Swipe a card to get started!</h2>}
                {/* <div className="flex">
                    <img className="sean" src={jake} alt="Jake"/>
                    <img className="hasibul" src={sean} alt="Sean"/>
                    <img className="sean" src={hasibul} alt="Hasibul"/>
                </div> */}
            </div>
            <div className="cardContainer" >
            {this.state.movies.filter(movie => movie.year >= '2000' && movie.media === 'movie').map(movie => (
                <TinderCard
                className="swipe"
                key={movie.id}
                preventSwipe={['up', 'down']}
                onSwipe={(dir) => this.swipeHandler(dir, movie)}
                >
                <div 
                style={{ backgroundImage: `url(${movie.poster})` }}
                className="card">
                    <h1>{movie.title}</h1>
                    <h4>{movie.genre}</h4>
                    {/* <h5>{movie.plot}</h5> */}
                </div>
                </TinderCard>
            ))}
            </div>
        </div>
    )
    }
}

export default TinderCards
