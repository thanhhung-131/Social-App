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
                src='https://i.pinimg.com/564x/73/0f/5b/730f5b9008237c6f37de125a39b33392.jpg'
                alt=''
              />
              <span>Backstep Doe</span>
            </div>
            <div className='buttons'>
              <button>Add Friend</button>
              <button>Remove</button>
            </div>
          </div>
          <div className='user'>
            <div className='userInfo'>
              <img
                src='https://i.pinimg.com/564x/73/0f/5b/730f5b9008237c6f37de125a39b33392.jpg'
                alt=''
              />
              <span>Backstep Doe</span>
            </div>
            <div className='buttons'>
              <button>Add Friend</button>
              <button>Remove</button>
            </div>
          </div>
        </div>
        <div className='item'>
          <span>Latest Activities</span>
          <div className='user'>
            <div className='userInfo'>
              <img
                src='https://i.pinimg.com/564x/73/0f/5b/730f5b9008237c6f37de125a39b33392.jpg'
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
                src='https://i.pinimg.com/564x/73/0f/5b/730f5b9008237c6f37de125a39b33392.jpg'
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
                src='https://i.pinimg.com/564x/73/0f/5b/730f5b9008237c6f37de125a39b33392.jpg'
                alt=''
              />
              <span>Backstep Doe</span>
            </div>
          </div>
          <div className='user'>
            <div className='userInfo'>
              <img
                src='https://i.pinimg.com/564x/73/0f/5b/730f5b9008237c6f37de125a39b33392.jpg'
                alt=''
              />
              <span>Backstep Doe</span>
            </div>
          </div>
          <div className='user'>
            <div className='userInfo'>
              <img
                src='https://i.pinimg.com/564x/73/0f/5b/730f5b9008237c6f37de125a39b33392.jpg'
                alt=''
              />
              <span>Backstep Doe</span>
            </div>
          </div>
          <div className='user'>
            <div className='userInfo'>
              <img
                src='https://i.pinimg.com/564x/73/0f/5b/730f5b9008237c6f37de125a39b33392.jpg'
                alt=''
              />
              <div className="online"></div>
              <span>Backstep Doe</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightBar
