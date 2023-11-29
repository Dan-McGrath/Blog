import { useLoaderData } from "react-router-dom";
import { fetchPost } from "../../helpers/api";
import Comments from "../comments/Comments";
import {
  Wrapper,
  Title,
  Author,
  CommentsWrapper,
  Article,
} from "./postDetailStyles";

export const loader = async ({ params }) => {
  const post = await fetchPost(params.postId);

  return { post };
};

const PostDetail = () => {
  const { post } = useLoaderData();

  return (
    <Wrapper>
      <Title>{post.title}</Title>
      <Author>{post.user.username}</Author>
      <Article>{post.article}</Article>
      <CommentsWrapper>
        <Comments comments={post.comments} />
      </CommentsWrapper>
    </Wrapper>
  );
};
export default PostDetail;
