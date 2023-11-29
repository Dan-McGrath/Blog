import PropTypes from "prop-types";
import Reply from "./Reply";

const Replies = ({ replies }) => {
  console.log(replies);
  return (
    <>
      {replies.map((reply) => (
        <Reply key={reply._id} reply={reply} />
      ))}
    </>
  );
};

Replies.propTypes = {
  replies: PropTypes.array,
};

export default Replies;
