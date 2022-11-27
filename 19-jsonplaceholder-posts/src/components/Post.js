import './Post.css'
function Post(props) {
  const { userId, id, title, body } = props;
  
  return (
    <div className="post">
      <small>{id}</small>
      <h1>{title}</h1>
      <h2>{userId}</h2>
      <p>{body}</p>
    </div>
  );
}

export default Post;
