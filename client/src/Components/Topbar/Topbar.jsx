import React, { useState } from 'react'
import './Topbar.css';
import SearchIcon from '@mui/icons-material/Search';
import SquareIcon from '@mui/icons-material/Square';
import CircleIcon from '@mui/icons-material/Circle';
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';
import Signup from '../SignUp/Signup';
function Topbar() {
  const [searchInput,setSearchInput] = useState();
  const [caStat,setCaStat] = useState(false);
  const handleSearch =(e)=>{
    e.preventDefault();
  }
  return (<>
    <div className="topBar mob-hid">
      <div className="topBar-logo"></div>

      <form className="topBar-search">
        <button type="button" className="search_button">
          <SearchIcon onClick={handleSearch}/>
        </button>
        <input type="text" placeholder="Search for your favorite groups in ATG" className="search__input" onChange={(e) => setSearchInput(e.target.value)}/>
      </form>

      <div className="topBar-link">
          Create account.
          <button className='button' onClick={() => setCaStat(true)}>It’s free!</button>
      </div>
    </div>
    <div className="topBar-mob">
      <SquareIcon/>
      <CircleIcon/>
      <ChangeHistoryIcon/>
    </div>
    {caStat && <Signup caStat={caStat} setCaStat = {setCaStat}/>}
    </>
  )
}

export default Topbar
