import PropTypes from "prop-types";
import Reply from "./Reply";
import { Wrapper } from "./repliesStyles";

const Replies = ({ replies }) => {
  console.log(replies);
  return (
    <Wrapper>
      {replies.map((reply) => (
        <Reply key={reply._id} reply={reply} />
      ))}
    </Wrapper>
  );
};

Replies.propTypes = {
  replies: PropTypes.array,
};

export default Replies;
