import React from 'react'
import './Topbar.css';
import SearchIcon from '@mui/icons-material/Search';

function Topbar() {
  return (
    <div className="topBar">
        <div className="topBar-logo"></div>

        <form className="topBar-search">
          <button type="button" className="search_button">
            <SearchIcon/>
          </button>
          <input type="text" placeholder="Search for your favorite groups in ATG" className="search__input" />
        </form>

        <div className="topBar-link">
            Create account.
            <button className='button'>It’s free!</button>
        </div>
    </div>
  )
}

export default Topbar
