import './navbar.scss'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined'
import SearchIcon from '@mui/icons-material/Search'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='left'>
        <Link to={'/'} style={{ textDecoration: 'none' }}>
          <span>daikisocial</span>
        </Link>
        <HomeOutlinedIcon />
        <DarkModeOutlinedIcon />
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
            src='https://i.pinimg.com/564x/75/43/fd/7543fdb969708432716ec83b223b34fc.jpg'
            alt=''
          />
          <span>Daiki Doe</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
