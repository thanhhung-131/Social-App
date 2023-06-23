import './stories.scss'
import { useContext } from 'react'
import { AuthContext } from '../../context/authContext'

const Stories = () => {
  const { currentUser } = useContext(AuthContext)

  //Temporary
  const stories = [
    {
      id: 1,
      name: 'Daiki Doe',
      img: 'https://i.pinimg.com/564x/cd/a5/bc/cda5bc3e727730a271c7cd46f2e8b401.jpg'
    },
    {
      id: 2,
      name: 'Daiki Doe',
      img: 'https://i.pinimg.com/564x/cd/a5/bc/cda5bc3e727730a271c7cd46f2e8b401.jpg'
    },
    {
      id: 3,
      name: 'Daiki Doe',
      img: 'https://i.pinimg.com/564x/cd/a5/bc/cda5bc3e727730a271c7cd46f2e8b401.jpg'
    },
    {
      id: 4,
      name: 'Daiki Doe',
      img: 'https://i.pinimg.com/564x/cd/a5/bc/cda5bc3e727730a271c7cd46f2e8b401.jpg'
    },
  ]
  return (
    <div className='stories'>
      <div className='story'>
        <img src={currentUser.profilePicture} alt='' />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map(story => (
        <div className='story' key={story.id}>
          <img src={story.img} alt='' />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories
