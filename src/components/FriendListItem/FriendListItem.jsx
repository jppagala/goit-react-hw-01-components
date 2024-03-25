import React from 'react';
import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li key={id} className={css.item}>
      <span className={`${css.status} ${checkOnlineStatus(isOnline)}`}></span>
      <img className={css.avatar} src={avatar} alt={name} />
      <p className={css.name}>{name}</p>
    </li>
  );
};

const checkOnlineStatus = status => {
  if (status) {
    return css.isOnline;
  }
  return css.isOffline;
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default FriendListItem;
