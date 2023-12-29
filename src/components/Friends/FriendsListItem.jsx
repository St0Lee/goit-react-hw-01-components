import css from "./Friends.module.css";

const FriendsListItem = ({avatar, name, isOnline}) => {
return (
<li className={css.friendsItem}>
    <span
        className={css.status}
        style={{ color: isOnline ? 'green' : 'red' }}>
        {isOnline ? 'Online' : 'Offline'}
      </span>
    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{name}</p>
  </li>)
};

export default FriendsListItem;

