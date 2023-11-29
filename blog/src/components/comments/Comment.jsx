import PropTypes from "prop-types";
import Replies from "../Replies/Replies";
import { Wrapper, Text, Author, RepliesWrapper } from "./commentStyles";

const Comment = ({ comment }) => {
  return (
    <>
      <Wrapper>
        <Text>{comment.text}</Text>
        <Author>{comment.name}</Author>
        <RepliesWrapper>
          <Replies replies={comment.replies} />
        </RepliesWrapper>
      </Wrapper>
    </>
  );
};

Comment.propTypes = {
  comment: PropTypes.object,
};

export default Comment;
