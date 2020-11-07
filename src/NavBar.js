import React from 'react'
import PersonIcon from '@material-ui/icons/Person'
import ForumIcon from '@material-ui/icons/Forum'
import IconButton from '@material-ui/core/IconButton'
import "./NavBar.css"

const NavBar = () => {

    return (
        <div className="header">
            <IconButton>
            <PersonIcon className="header__icon" fontSize="large"/>
            </IconButton>
            <h1>PickFlix: Tinder... but for Netflix!</h1>
            <IconButton>
            <ForumIcon className="header__icon" fontSize="large"/>
            </IconButton>
        </div>
    )
    
}

export default NavBar
