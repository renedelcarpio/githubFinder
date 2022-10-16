import { useState } from 'react';
import { Repo } from '../../services/services';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Form from '../Form/Form';
import Loader from '../Loader/Loader';
import RepoCard from '../RepoCard/RepoCard';

import './RepositoriesSearch.scss';

const RepositoriesSearch = () => {
  const [repository, setRepository] = useState('');
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onRepoChange = (e) => setRepository(e.target.value);

  const getRepo = async () => {
    setLoader(true);
    try {
      await Repo.getRepo(repository).then(({ items }) => {
        setData(items);
        setLoader(false);
      });
    } catch (error) {
      console.log(error);
      setErrorMessage(`${error.message}, the repository does not exixt.`);
      setLoader(false);
    }
  };

  const onSearchRepo = (e) => {
    e.preventDefault();
    setErrorMessage('');
    setData([]);
    getRepo();
  };

  return (
    <div className="search__container">
      <Form
        onSubmit={onSearchRepo}
        value={repository}
        onChange={onRepoChange}
      />
      {loader ? (
        <Loader />
      ) : (
        <div className="repo">
          {errorMessage ? (
            <ErrorMessage message={errorMessage} />
          ) : (
            data?.map((repo) => {
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
            })
          )}
        </div>
      )}
    </div>
  );
};

export default RepositoriesSearch;
