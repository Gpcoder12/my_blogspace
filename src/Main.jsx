// Main.jsx
import React, { useState, useEffect } from 'react';

const Main = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://localhost:3306/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  return (
    <main className="main">
      <div className="container">
        <h2>Latest Blog Posts</h2>
        <div className="blog-posts">
          {posts.map(post => (
            <div className="blog-post" key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Main;

