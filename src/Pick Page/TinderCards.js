import React from 'react';
import TinderCard from 'react-tinder-card';
import "./TinderCards.css"
import GenreFilter from './GenreFilter';
import { withAlert } from 'react-alert'

class TinderCards extends React.Component {

    state= {
        movies: [],
        likedMovies: [],
        likedArray: [],
        lastDirection: "",
        genreFilter: "All",
        languageFilter: "English",
        mediaFilter: "movie",
    }
    
    componentDidMount = () => {
        fetch("http://localhost:3000/movies")
        .then(resp => resp.json())
        .then((moviesArray) => {
            this.setState({
            // movies: moviesArray.sort(() => Math.random() - Math.random()).slice(0, 100).filter(movie => movie.country === "USA" && movie.language === "English")
            movies: moviesArray.filter(movie => movie.country === "USA" && movie.language === "English")
            // need to render the movies that DO NOT match any of the movies in the likedMovies db
        })
        })
        fetch("http://localhost:3000/liked_movies")
        .then(resp => resp.json())
        .then((data) => {
            this.setState({
            likedMovies: data
            })
        })
    }        

    addLikedMovie = (movie) => {
        let likedMovieObj = {
            user_id: 2,
            movie_id: movie.id
        }
        // const alert = this.props.alert;
        // Need to include the current_userid stuff here
        if(this.state.likedMovies.filter((obj) => {return obj.user.id === 2}).map(obj => obj.movie.netflixid).includes(movie.netflixid)) {
            console.log("Did not add")
            // this.alert.show("You've already picked this flix!")
            alert("You've already picked this flix!")
        }
        else {
            console.log("adding movie")
            fetch("http://localhost:3000/liked_movies", {
                method: "POST", 
                headers: {
                    'Content-Type': "application/json",
                    Accepts: 'application/json'
                },
                body: JSON.stringify(likedMovieObj)
            })
            .then(response => response.json())
            .then(data => { 
                this.setState((prevState) => ({
                    likedMovies: [...prevState.likedMovies, data]
                }))
                this.checkIfMovieMatched(data)
            })
        }
    }

    checkIfMovieMatched = (data) => {
        if(this.state.likedMovies.filter((obj) => {return obj.user.id !== data.user.id}).map(obj => obj.movie.netflixid).includes(data.movie.netflixid)) {
            alert("You've got a match!")
        }
        else {
            console.log("movie did not match")
        }
    }
    
    swipeHandler = (dir, movie) => {
        if(dir === 'right') {
            this.setState((prevState) => ({
                likedArray: [...prevState.likedArray, movie],
                lastDirection: dir
            }))
            console.log(movie)
            this.addLikedMovie(movie)
        }
        else {
            movie.priority -= 1
            this.setState({ lastDirection: dir})
        }
    }

    changeGenreFilter = (filterValue) => {
        this.setState({
            genreFilter: filterValue
        })
    }

    changeLanguageFilter = (filterValue) => {
        this.setState({
            languageFilter: filterValue
        })
    }

    changeMediaFilter = (filterValue) => {
        this.setState({
            mediaFilter: filterValue
        })
    }

    filterAllMovies = () => {
        let arrayToReturn = this.state.movies
        if(this.state.genreFilter !== "All"){
            arrayToReturn = this.state.movies.filter((movieObj) => {
                return movieObj.includes(this.state.genreFilter)
        })
        }
        this.setState({
            movies: arrayToReturn
        })
    }

    render() {
        // let someMovies = this.state.movies.splice(25, 50)
    return (
        <div className="root">
            <GenreFilter
                genreFilter={this.state.genreFilter}
                languageFilter={this.state.languageFilter}
                mediaFilter={this.state.mediaFilter}
                changeGenreFilter={this.changeGenreFilter}
                changeLanguageFilter={this.changeLanguageFilter}
                changeMediaFilter={this.changeMediaFilter}
            />
                <br></br>
                <hr></hr>
                <br></br>
            <div>
                {this.state.lastDirection === 'right' ? <div className="flex"><h2 className='infoText'>Added to Liked Movies!</h2></div> 
                : this.state.lastDirection === 'left' ? <div className="flex"><h2 className='infoText'>That Movie Sucked!</h2></div> 
                : <h2 className='infoText'>Swipe a card to get started!</h2>}
            </div>
            <div className="cardContainer" >
            {this.state.movies.map(movie => (
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
