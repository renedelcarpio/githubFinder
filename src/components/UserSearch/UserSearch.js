import { useState } from 'react';
import { User } from '../../services/services';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Form from '../Form/Form';
import Loader from '../Loader/Loader';
import UserCard from '../UserCard/UserCard';

import './UserSearch.scss';

const UserSearch = () => {
  const [user, setUser] = useState('');
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onUserChange = (e) => setUser(e.target.value);

  const getUsers = async () => {
    setLoader(true);
    try {
      await User.getUser(user).then(({ items }) => {
        setData(items);
        setLoader(false);
      });
    } catch (error) {
      console.log(error);
      setErrorMessage(`${error.message}, the user does not exist.`);
      setLoader(false);
    }
  };

  const onSearchUser = (e) => {
    e.preventDefault();
    setErrorMessage('');
    setData([]);
    getUsers();
  };

  return (
    <div className="search__container">
      <Form onSubmit={onSearchUser} value={user} onChange={onUserChange} />
      {loader ? (
        <Loader />
      ) : (
        <div className="user">
          {errorMessage ? (
            <ErrorMessage message={errorMessage} />
          ) : (
            data?.map((person) => {
              return (
                <UserCard
                  key={person.id}
                  image={person.avatar_url}
                  name={person.login}
                  url={person.html_url}
                />
              );
            })
          )}
        </div>
      )}
    </div>
  );
};

export default UserSearch;
