import PropTypes from 'prop-types';

export default function Message({ message }) {
  return <p>{message}</p>;
}

Message.propTypes = {
  message: PropTypes.string.isRequired,
};
