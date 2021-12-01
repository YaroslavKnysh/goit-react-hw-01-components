import React from "react";
import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem";
import style from "./Friends.module.css";

function FriendList({ friends }) {
  return (
    <ul className={style.friendList}>
      {friends.map((friend) => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.array,
};
