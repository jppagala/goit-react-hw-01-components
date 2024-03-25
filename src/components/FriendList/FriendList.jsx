import React from 'react';
import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import FriendListItem from 'components/FriendListItem/FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <section className={css.friendsContainer}>
      <ul className={css.friendList}>
        {friends.map(friend => (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            id={friend.id}
          />
        ))}
      </ul>
    </section>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;
