import React from 'react';
import TinderCard from 'react-tinder-card';
import "./TinderCards.css"

class TinderCards extends React.Component {
    state= {
        movies: [],
        testArray: []
    }
    
    componentDidMount = () => {
        fetch("http://localhost:3000/movies")
        .then(resp => resp.json())
        .then((moviesArray) => {
            this.setState({
            movies: moviesArray
            })
        })
    }
    
    swipeHandler = (dir, movie) => {
        if(dir === 'right') {
            console.log("Right is Might", movie)
            this.setState((prevState) => ({
                testArray: [...prevState.testArray, movie]
            }))
        }
        else {
            movie.priority -= 1
            console.log(movie.priority)
        }
    }

    render() {
        let someMovies = this.state.movies.splice(0, 25)
        console.log(this.state.testArray)
    return (
        <div>
            <h1 className="center">PickFlix</h1>
            <h4 className="center">Tinder... but for Netflix!</h4>
            <div className="cardContainer" >
            {someMovies.filter(movie => movie.priority >= 5).map(movie => (
                <>
                <TinderCard
                className="swipe"
                key={movie.title}
                preventSwipe={['up', 'down']}
                onSwipe={(dir) => this.swipeHandler(dir, movie)}
                >
                <div 
                style={{ backgroundImage: `url(${movie.poster})` }}
                className="card">
                    <h2>{movie.title}</h2>
                    <h4>{movie.genre}</h4>
                    <h5>{movie.plot}</h5>
                </div>
                </TinderCard>
                </>
            )
            )}
            </div>

        </div>
    )
    }
}

export default TinderCards
