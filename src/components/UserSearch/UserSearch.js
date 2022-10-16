import { useState } from 'react';
import { User } from '../../services/services';
import Form from '../Form/Form';
import UserCard from '../UserCard/UserCard';

import './UserSearch.scss';

const UserSearch = () => {
  const [user, setUser] = useState('');
  const [data, setData] = useState([]);

  const onUserChange = (e) => setUser(e.target.value);

  const getUsers = () => {
    User.getUser(user).then(({ items }) => {
      setData(items);
    });
  };

  const onSearchUser = (e) => {
    e.preventDefault();
    getUsers();
  };

  return (
    <div className="search__container">
      <Form onSubmit={onSearchUser} value={user} onChange={onUserChange} />
      <div className="user">
        {data?.map((person) => {
          return (
            <UserCard
              key={person.id}
              image={person.avatar_url}
              name={person.login}
              url={person.html_url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default UserSearch;
