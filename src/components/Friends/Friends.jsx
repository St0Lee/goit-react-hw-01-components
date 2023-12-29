import css from "./Friends.module.css";
import FriendsListItem from "./FriendsListItem";

const Friends = ({friendsData}) => {
    const friendsElements = friendsData.map(friend => <FriendsListItem 
    key={friend.id}
    avatar={friend.avatar}
    name={friend.name}
    isOnline={friend.isOnline}
    />)
    return (
        <ul className={css.friendsList}>
            {friendsElements}
        </ul>
    );
};

export default Friends;