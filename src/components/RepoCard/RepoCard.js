import './RepoCard.scss';

const RepoCard = ({
  id,
  name,
  repo,
  url,
  user,
  language,
  fork,
  stars,
  description,
}) => {
  return (
    <div className="repo__card" key={id}>
      <p className="repo__name">
        <span>Repo:</span> {name}
      </p>
      <a className="repo__url" href={url} target="blank" rel="noreferrer">
        <span>Link:</span> {url}
      </a>
      <p className="repo__username">
        <span>Owner:</span> {user}
      </p>
      <p className="repp__language">
        <span>Language:</span> {language}
      </p>
      <p className="repo__forks">
        <span>Forks:</span> {fork}
      </p>
      <p className="repo__stars">
        <span>Stars:</span> {stars}
      </p>
      <p className="repo__description">{description}</p>
    </div>
  );
};

export default RepoCard;
