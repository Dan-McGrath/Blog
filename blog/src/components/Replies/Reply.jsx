import PropTypes from "prop-types";

const Reply = ({ reply }) => {
  console.log(reply);
  return (
    <>
      <p>{reply.text}</p>
      <p>{reply.name}</p>
    </>
  );
};

Reply.propTypes = {
  reply: PropTypes.object,
};

export default Reply;
