import { useLoaderData } from "react-router-dom";
import { fetchPost } from "../../helpers/api";

export const loader = async ({ params }) => {
  const post = await fetchPost(params.postId);

  return { post };
};

const PostDetail = () => {
  const { post } = useLoaderData();
  console.log(post);
  return (
    <>
      <h2>{post.postInfo.title}</h2>
      <p>{post.postInfo.username}</p>
      <p>{post.postInfo.article}</p>
      {post.comments.map((comment) => (
        <div key={comment._id}>
          <p>{comment.text}</p>
          <p>{comment.name}</p>
        </div>
      ))}
    </>
  );
};
export default PostDetail;
