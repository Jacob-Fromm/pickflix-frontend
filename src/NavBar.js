import React from 'react'
import PersonIcon from '@material-ui/icons/Person'
import MovieIcon from '@material-ui/icons/Movie'
import IconButton from '@material-ui/core/IconButton'
import "./NavBar.css"
import { Link } from 'react-router-dom'

const NavBar = () => {
 
    return (
        <div className="header">
            <Link to="/profile">
                <IconButton>
                    <PersonIcon className="header__icon" fontSize="large"/>
                </IconButton>
            </Link>
            <h1>PickFlix: Tinder... but for Netflix!</h1>
            <Link to="/pickpage">
                <IconButton>
                    <MovieIcon className="header__icon" fontSize="large"/>
                </IconButton>
            </Link>
        </div>
    )
    
}

export default NavBar
