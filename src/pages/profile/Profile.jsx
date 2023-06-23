import './profile.scss'
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import PinterestIcon from '@mui/icons-material/Pinterest'
import TwitterIcon from '@mui/icons-material/Twitter'
import PlaceIcon from '@mui/icons-material/Place'
import LanguageIcon from '@mui/icons-material/Language'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { Link } from 'react-router-dom'
import Posts  from '../../components/posts/Posts'

const Profile = () => {
  return (
    <div className='profile'>
      <div className='images'>
        <img
          src='https://i.pinimg.com/564x/57/79/d8/5779d82b61f5720c4519d93dbd7ce8fc.jpg'
          alt=''
          className='cover'
        />
        <img
          src='https://i.pinimg.com/564x/df/24/6e/df246e9f351f560391275e24f625196f.jpg'
          alt=''
          className='profilePicture'
        />
      </div>
      <div className='profileContainer'>
        <div className='userInfoProfile'>
          <div className='left'>
            <Link to={'http://facebook.com'}>
              <FacebookTwoToneIcon />
            </Link>
            <Link to={'http://facebook.com'}>
              <InstagramIcon />
            </Link>
            <Link to={'http://facebook.com'}>
              <TwitterIcon />
            </Link>
            <Link to={'http://facebook.com'}>
              <LinkedInIcon />
            </Link>
            <Link to={'http://facebook.com'}>
              <PinterestIcon />
            </Link>
          </div>
          <div className='center'>
            <span>Backstep Doe</span>
            <div className='info'>
              <div className='item'>
                <PlaceIcon />
                <span>Vietnam</span>
              </div>
              <div className='item'>
                <LanguageIcon />
                <span>daiki-thanh.dev</span>
              </div>
            </div>
            <button>follow</button>
          </div>
          <div className='right'>
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
      <Posts />
      </div>
    </div>
  )
}

export default Profile
