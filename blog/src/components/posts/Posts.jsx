import Post from "./post";
import PropTypes from "prop-types";

const Posts = ({ postArray }) => {
  return (
    <>
      <div className="posts">
        <Post postArray={postArray} />
      </div>
    </>
  );
};

Posts.propTypes = {
  postArray: PropTypes.array,
};

export default Posts;
