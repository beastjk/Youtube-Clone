import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import AppsIcon from '@material-ui/icons/Apps'
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications'
import {Avatar} from '@material-ui/core'

function Header() {
    return (
        <div className = 'header'>
            <div className="header__left">
                <MenuIcon />   
                <img className="header__logo" src="https://static.toiimg.com/photo/58623495.cms" alt=""></img>    
            </div>
            <div className="header__input">
                <input type = 'text' placeholder = "Search"/>
                <SearchIcon className = 'header__inputButton'/>
            </div>
            <div className="header__icons">
                <VideoCallIcon className="header__icon"/>
                <AppsIcon className="header__icon"/>
                <NotificationsIcon className="header__icon"/>
                <Avatar alt="Remy Sharp" src="https://avatars3.githubusercontent.com/u/12779984?s=400&u=bd7db8429aee0fa72d76fafd02a6edcdea784789&v=4" />
            </div>
            
        </div>
    )
}

export default Header
