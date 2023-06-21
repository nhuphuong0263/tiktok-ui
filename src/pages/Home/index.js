import { useEffect, useState } from 'react';
import { listPost } from '~/apiServices/listService';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await listPost();
        setPosts(result);
      } catch (error) {
        console.log('error nua', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Home page.</h2>
      <ul>{posts && posts.map((post) => <ol key={post.id}>{post.title}</ol>)}</ul>
    </div>
  );
}

export default Home;
