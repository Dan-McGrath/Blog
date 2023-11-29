import Comment from "./comment";
import PropTypes from "prop-types";
import { Wrapper } from "./commentsStyles";

const Comments = ({ comments }) => {
  comments.forEach((ele) => {
    if (ele.replies) {
      ele.replies.forEach((reply) => {
        let index = comments.findIndex((ele) => ele._id === reply._id);
        if (index === -1) {
          return;
        }
        comments.splice(index, 1);
      });
    }
  });
  return (
    <Wrapper>
      {comments.map((comment) => (
        <Comment key={comment._id} comment={comment} />
      ))}
    </Wrapper>
  );
};

Comments.propTypes = {
  comments: PropTypes.array,
};

export default Comments;
