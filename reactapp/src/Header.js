import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';


function Header() {
  return (
    <div className = 'header' >

    <div className = 'header__icons' >

    <div className = 'header__icon' >
    <SearchIcon / >
    <p>Search</p>
    </div>

    </div>

    <div className = 'header__icons' >

    <div className = 'header__icon' >
    <PersonIcon / >
    <p>Profile</p>
    </div>

    </div>

    </div>
  )
}

export default Header
