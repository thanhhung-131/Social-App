import React from 'react'
import './rightbar.scss'

const RightBar = () => {
  return (
    <div className='rightbar'>
      <div className='container'>
        <div className='item'>
          <span>Suggestions for You</span>
          <div className='user'>
            <div className='userInfo'>
              <img
                src='https://i.pinimg.com/564x/df/24/6e/df246e9f351f560391275e24f625196f.jpg'
                alt=''
              />
              <span>Backstep Doe</span>
            </div>
            <div className='buttons'>
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className='user'>
            <div className='userInfo'>
              <img
                src='https://i.pinimg.com/564x/df/24/6e/df246e9f351f560391275e24f625196f.jpg'
                alt=''
              />
              <span>Backstep Doe</span>
            </div>
            <div className='buttons'>
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className='item'>
          <span>Latest Activities</span>
          <div className='user'>
            <div className='userInfo'>
              <img
                src='https://i.pinimg.com/564x/df/24/6e/df246e9f351f560391275e24f625196f.jpg'
                alt=''
              />
              <p>
                <span>Backstep Doe</span> Changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className='user'>
            <div className='userInfo'>
              <img
                src='https://i.pinimg.com/564x/df/24/6e/df246e9f351f560391275e24f625196f.jpg'
                alt=''
              />
              <p>
                <span>Backstep Doe</span> Changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        <div className='item'>
          <span>Online Friends</span>
          <div className='user'>
            <div className='userInfo'>
              <img
                src='https://i.pinimg.com/564x/df/24/6e/df246e9f351f560391275e24f625196f.jpg'
                alt=''
              />
              <div className="online"/>
              <span>Backstep Doe</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightBar
