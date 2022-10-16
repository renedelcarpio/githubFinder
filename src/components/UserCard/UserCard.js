import './UserCard.scss';

const UserCard = ({ id, image, name, url }) => {
  return (
    <div className="user__card" key={id}>
      <img className="user__image" src={image} alt={name} />
      <div className="user__info">
        <p className="user__name">{name}</p>
        <a className="user__url" href={url} target="blank" rel="noreferrer">
          {url}
        </a>
      </div>
    </div>
  );
};

export default UserCard;
