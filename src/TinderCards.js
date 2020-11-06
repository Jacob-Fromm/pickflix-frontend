import React from 'react';
import TinderCard from 'react-tinder-card';
import "./TinderCards.css"

class TinderCards extends React.Component {
    // const [users, setUsers] = useState([
    //     {
    //         name: "Jake F.",
    //         url: "https://ca.slack-edge.com/T02MD9XTF-U018FH2KWR5-138d4e181585-512",
    //         location: "Manhattan, NY"
    //     },
    //     {
    //         name: "Sean P.",
    //         url: "https://ca.slack-edge.com/T02MD9XTF-UJW55RH1R-95bb92aacdc8-512",
    //         location: "Queens, NY"
    //     },
    //     {
    //         name: "Hasibul C.",
    //         url: "https://ca.slack-edge.com/T02MD9XTF-U01CRNE8X3M-20276b8e7e2b-512",
    //         location: "Brooklyn, NY"
    //     }
    // ])

    state= {
        movies: []
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

    render() {
        console.log(this.state.movies)
    return (
        <div>
            <h1 className="center">PickFlix</h1>
            <h4 className="center">Tinder... but for Netflix!</h4>
            <div className="cardContainer">
            {this.state.movies.map(movie => (
                <TinderCard
                className="swipe"
                key={movie.id}
                preventSwipe={['up', 'down']}
                >
                <div 
                style={{ backgroundImage: `url(${movie.poster})` }}
                className="card">
                    <h1>{movie.title}</h1>
                    <h4>{movie.genre}</h4>
                </div>
                </TinderCard>
            )
            )}
            
            </div>
        </div>
    )
    }
}

export default TinderCards
