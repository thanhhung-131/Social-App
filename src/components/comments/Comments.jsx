import './comments.scss'

const Comments = () => {

    // Temporary
    const comments = [
        {
            id: 1,
            description: "This is so beautiful",
            userId: 3,
            name: "Jelly Bean",
            profilePicture: 'https://i.pinimg.com/564x/44/76/36/447636bd7e0ea9fb7969c07b33997b01.jpg',
        },
        {
            id: 2,
            description: "So amazing",
            userId: 4,
            name: "Caroll Kane",
            profilePicture: 'https://i.pinimg.com/564x/00/90/a6/0090a6f35bd460207797811af3765e24.jpg',
        },
    ]
  return (
    <div className='comments'>
        {comments.map(comment => (
            <div className="comment" key={comment.id}>
                <img src={comment.profilePicture} alt={comment.name} />
                <div className="info">
                    <span>{comment.name}</span>
                    <p>{comment.description}</p>
                </div>
                <span className='date'>1 hour ago</span>
            </div>
        ))}
    </div>
  )
}

export default Comments