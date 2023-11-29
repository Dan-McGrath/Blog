import Post from "./post";
import PropTypes from "prop-types";
import { Wrapper } from "./postsStyles";

const Posts = ({ postArray }) => {
  <Wrapper>
    <Post postArray={postArray} />
  </Wrapper>;
};

Posts.propTypes = {
  postArray: PropTypes.object,
};

export default Posts;
