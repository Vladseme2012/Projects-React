import { useState, useEffect } from 'react';
import Post from './Post';
const API_URL = 'https://jsonplaceholder.typicode.com/posts';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async function () {
      try {
        const res = await fetch(API_URL);
        const posts = await res.json();
        setPosts(posts);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    })();
  }, []); //Вариант с вызовом функции на месте!!! Для этого мы убираем имя функции и оборачиваем ее в круглые скобки и вызываем ее.

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const res = await fetch(API_URL);
  //       const posts = await res.json();
  //       setPosts(posts);
  //     } catch (error) {
  //       setError(error.message);
  //     }
  //     setIsLoading(false);
  //   }
  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   fetch(API_URL)
  //     .then((response) => response.json())
  //     .then((posts) => setPosts(posts))
  //     .catch((error) => setError(error.message))
  //     .finally(() => setIsLoading(false));
  // }, []);

  // if (isLoading) {
  //   return <h1>Please waite information is Loading</h1>;
  // }

  if (error) {
    return <h1>Error: {error}</h1>;
  }
  return (
    <div>
      <h1>Posts</h1>
      <hr />
      {isLoading ? (
        <h1>Please waite information is Loading</h1>
      ) : (
        posts.map((post) => <Post {...post} key={post.id} />)
      )}
    </div>
  );
}

export default Posts;
