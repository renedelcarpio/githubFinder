import { useState } from 'react';
import { Repo } from '../../services/services';
import Form from '../Form/Form';
import RepoCard from '../RepoCard/RepoCard';

import './RepositoriesSearch.scss';

const RepositoriesSearch = () => {
  const [repository, setRepository] = useState('');
  const [data, setData] = useState([]);

  const onRepoChange = (e) => setRepository(e.target.value);

  const getRepo = () => {
    Repo.getRepo(repository).then(({ items }) => {
      setData(items);
    });
  };

  const onSearchRepo = (e) => {
    e.preventDefault();
    getRepo();
  };

  return (
    <div className="search__container">
      <Form
        onSubmit={onSearchRepo}
        value={repository}
        onChange={onRepoChange}
      />
      <div className="repo">
        {data?.map((repo) => {
          return (
            <RepoCard
              key={repo.id}
              name={repo.full_name}
              url={repo.clone_url}
              user={repo.owner.login}
              language={repo.language}
              fork={repo.forks}
              stars={repo.stargazers_count}
              description={repo.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RepositoriesSearch;
