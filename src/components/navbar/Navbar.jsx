import { useEffect, useState } from 'react'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = ({setSidebar}) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const handleSearch = () => {
    // Handle search logic here
    navigate(`/searchResults/${search}`);
  };


  return (
    <div className="navbar-container">
      <div className='navbar-left'>
        <img src="https://img.icons8.com/ios/50/FFFFFF/menu--v7.png" alt="menu--v7" onClick={()=>setSidebar(prev=>prev?false:true)} />
        <div className='navbar-left-logo'>
          <Link to='/'> <img src="https://img.icons8.com/color/144/youtube-play.png" alt="youtube-play" /></Link>
          <b>YouTube-Clone IN</b>
        </div>
      </div>


      <div className='navbar-middle '>
        <div className='navbar-middle-input'>
          <input type="text" placeholder='Search' value={search} onChange={(e) => setSearch(e.target.value)} />
          <img className='search ' src="https://img.icons8.com/ios-filled/50/FFFFFF/search--v1.png" alt="search--v1" onClick={handleSearch} />
        </div>
        <img className='microphone' src="https://img.icons8.com/material-rounded/96/FFFFFF/microphone.png" alt="microphone" />
      </div>


      <div className='navbar-right'>
        <div className='navbar-right-icons'>
          <img src="https://img.icons8.com/android/24/FFFFFF/plus.png" alt="plus" />
          <h3 className=''>Create</h3>
        </div>
        <img src="https://img.icons8.com/material-rounded/96/FFFFFF/bell--v1.png" alt="bell--v1" />
        <img src="https://img.icons8.com/fluency-systems-regular/48/FFFFFF/user-male-circle--v1.png" alt="user-male-circle--v1" />
      </div>

    </div>
  )
}

export default Navbar