import PropTypes from "prop-types";
import React from "react";
import style from "./Friends.module.css";

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={style.item}>
      <span className={`${style.status} ${isOnline ? "" : style.isOffline}`}>
        {isOnline}
      </span>

      <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={style.name}>{name}</p>
    </li>
  );
}

export default FriendListItem;

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
