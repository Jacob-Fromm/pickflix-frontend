import React from 'react'
import PersonIcon from '@material-ui/icons/Person'
import MovieIcon from '@material-ui/icons/Movie'
import IconButton from '@material-ui/core/IconButton'
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import "./NavBar.css"
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import ls from "local-storage"


const NavBar = (props) => {

    const localClickHandler = (e) => {
        ls.set("currentUser", null)
    }

    return (
        <div className="header">
            <Link to="/profile">
                <IconButton>
                    <PersonIcon className="header__icon" fontSize="large"/>
                </IconButton>
            </Link>
            <Link to="/welcome">
                <img src="https://fontmeme.com/permalink/210111/72a4a804c01a2fa22cb39362f6132c1d.png" alt="netflix-font" border="0"/>
            </Link>
            <Link to="/pickpage">
                <IconButton>
                    <MovieIcon className="header__icon" fontSize="large"/>
                </IconButton>
            </Link>

        {ls.get("currentUser") !== null
        ? 
        <Link to="/login">
        <button onClick={localClickHandler}>Logout</button> 
        </Link>
        :
            <Link to="/login">
                <IconButton>
                    <MeetingRoomIcon className="header__icon" fontSize="large"/>
                </IconButton>
            </Link>
        }
        </div>
    )
    
}

export default NavBar