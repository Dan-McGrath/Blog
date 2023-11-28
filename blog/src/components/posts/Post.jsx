import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Post = ({ postArray }) => {
  const post = postArray.posts.map((post) => (
    <>
      <div className="post" key={post.id}>
        <Link to={`/${post._id}`}>
          <h3 className="title">{post.title}</h3>
          <article>{post.article}</article>
          <p className="user">{post.user.username}</p>
        </Link>
      </div>
    </>
  ));
  return post;
};

Post.proptypes = {
  postArray: PropTypes.array,
};

export default Post;
