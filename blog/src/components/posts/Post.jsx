import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Wrapper, Title, Article, User } from "./postStyles";

const Post = ({ postArray }) => {
  const post = postArray.posts.map((post) => (
    <Wrapper key={post._id}>
      <Link to={`/${post._id}`}>
        <Title>{post.title}</Title>
        <Article>{post.article}</Article>
        <User>{post.user.username}</User>
      </Link>
    </Wrapper>
  ));
  console.log(post);
  return post;
};

Post.proptypes = {
  postArray: PropTypes.array,
};

export default Post;
