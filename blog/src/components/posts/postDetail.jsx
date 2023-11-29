import { useLoaderData } from "react-router-dom";
import { fetchPost } from "../../helpers/api";
import Comments from "../comments/Comments";

export const loader = async ({ params }) => {
  const post = await fetchPost(params.postId);

  return { post };
};

const PostDetail = () => {
  const { post } = useLoaderData();
  console.log(post);
  return (
    <>
      <h2>{post.title}</h2>
      <p>{post.user.username}</p>
      <p>{post.article}</p>
      <Comments comments={post.comments} />
    </>
  );
};
export default PostDetail;
