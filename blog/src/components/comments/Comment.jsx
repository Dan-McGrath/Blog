import PropTypes from "prop-types";
import Replies from "../Replies/Replies";

const Comment = ({ comment }) => {
  return (
    <>
      <div>
        <p>{comment.text}</p>
        <p>{comment.name}</p>
        <Replies replies={comment.replies} />
      </div>
    </>
  );
};

Comment.propTypes = {
  comment: PropTypes.object,
};

export default Comment;
