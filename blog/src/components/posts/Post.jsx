import { useEffect, useState } from "react";

const Post = () => {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("http://localhost:3000");
      const data = await response.json();
      setPost(data.posts);
    };
    fetchPosts();
  }, []);
  const post = posts.map((post) => (
    <>
      <div className="post" key={post.id}>
        <h3 className="title">{post.title}</h3>
        <article>{post.article}</article>
        <p className="user">{post.user.username}</p>
      </div>
    </>
  ));
  return post;
};

export default Post;
