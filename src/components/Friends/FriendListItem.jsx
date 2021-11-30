import PropTypes from "prop-types";
import React from "react";

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className="item">
      <span className={`status ${isOnline ? "" : "isOffline"}`}>
        {isOnline}
      </span>

      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

export default FriendListItem;

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
