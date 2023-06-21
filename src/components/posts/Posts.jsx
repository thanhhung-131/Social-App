import Post from '../post/Post'
import './posts.scss'

const Posts = () => {

  // Temporary
  const posts = [
    {
      id: 1,
      name: 'Daiki Satou',
      userId: 1,
      profilePicture: 'https://i.pinimg.com/564x/75/43/fd/7543fdb969708432716ec83b223b34fc.jpg',
      description: "Lorem ipsum dolor sit am id, consectetur adipis occ ullamcorper",
      img: 'https://i.pinimg.com/564x/78/77/86/787786ee1401a795f5b04cbf99833ac2.jpg'
    },
    {
      id: 2,
      name: 'Kira Moujo',
      userId: 2,
      profilePicture: 'https://i.pinimg.com/564x/e3/8b/e8/e38be86c944fe4f37b77c9de32b7b52e.jpg',
      description: "Lorem ipsum dolor sit am id, consectetur adipis occ ullamcorper",
    },
  ]
  return (
    <div className='posts'>
      {posts.map(post=> (
        <Post post={post} key={post.id}/>
      ))}
    </div>
  )
}

export default Posts