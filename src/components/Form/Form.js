import { BiSearchAlt } from 'react-icons/bi';
import './Form.scss';

const Form = ({ onSubmit, value, onChange }) => {
  return (
    <>
      <h1 className="neon__title">Github Search</h1>
      <form onSubmit={onSubmit}>
        <input value={value} onChange={onChange} placeholder="Search by user" />
        <button type="submit">
          <BiSearchAlt className="search" />
        </button>
      </form>
    </>
  );
};

export default Form;
