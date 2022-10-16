import './ErrorMessage.scss';

const ErrorMessage = ({ message }) => {
  return <h4 className="error">{message}</h4>;
};

export default ErrorMessage;
