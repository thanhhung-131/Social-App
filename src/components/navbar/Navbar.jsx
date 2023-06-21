import './navbar.scss'
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined'
import SearchIcon from '@mui/icons-material/Search'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { DarkModeContext } from '../../context/darkModeContext'
import { AuthContext } from '../../context/authContext'

const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext)
  const { currentUser } = useContext(AuthContext)

  return (
    <div className='navbar'>
      <div className='left'>
        <Link to={'/'} style={{ textDecoration: 'none' }}>
          <span>daikisocial</span>
        </Link>
        <HomeOutlinedIcon />
        {darkMode ? <WbSunnyOutlinedIcon onClick={toggle} style={{cursor: "pointer"}}/> : <DarkModeOutlinedIcon onClick={toggle} style={{cursor: "pointer"}}/>}
        <GridViewOutlinedIcon />
        <div className='search'>
          <SearchIcon />
          <input type='text' placeholder='Search...' />
        </div>
      </div>
      <div className='right'>
        <PermIdentityIcon />
        <MailOutlineIcon />
        <NotificationsNoneOutlinedIcon />
        <div className='user'>
          <img
            src={currentUser.profilePicture}
            alt=''
          />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
