import css from "./Friends.module.css";

const Friends = ({friendsData}) => {
    const friendsElements = friendsData.map(friend => <li key={friend.id} className={css.friendsItem}>
    <span
        className={css.status}
        style={{ color: friend.isOnline ? 'green' : 'red' }}>
        {friend.isOnline ? 'Online' : 'Offline'}
      </span>
    <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
    <p className={css.name}>{friend.name}</p>
  </li>)
    return (
        <ul className={css.friendsList}>
            {friendsElements}
        </ul>
    );
};

export default Friends;