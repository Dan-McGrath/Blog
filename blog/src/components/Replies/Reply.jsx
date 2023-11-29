import PropTypes from "prop-types";
import { Wrapper, Text, Author } from "./replyStyles";

const Reply = ({ reply }) => {
  console.log(reply);
  return (
    <Wrapper>
      <Text>{reply.text}</Text>
      <Author>{reply.name}</Author>
    </Wrapper>
  );
};

Reply.propTypes = {
  reply: PropTypes.object,
};

export default Reply;
