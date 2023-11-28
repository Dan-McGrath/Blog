import "dotenv";

export const fetchPosts = async () => {
  const response = await fetch("http://localhost:3000", {
    mode: "cors",
  });
  const data = await response.json();
  return data.posts;
};

export const fetchPost = async (post) => {
  const response = await fetch(`http://localhost:3000/${post}`, {
    mode: "cors",
  });
  const data = await response.json();
  const postInfo = data.post;
  const comments = data.comments;
  return { postInfo, comments };
};
