import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

export const Profile = ({ name, avatarUrl, bio, size }) => {
  return (
    <div className="profile">
      <img
        className={`profile__avatar ${size}`}
        src={avatarUrl}
        alt="Avatar user"
      />
      <div>
        <h2 className={`profile__title ${size}`}>{name}</h2>
        <p className="profile__bio">{bio}</p>
      </div>
    </div>
  );
};

Profile.defaultProps = {
  avatarUrl: '',
  name: '',
  bio: '',
  size: 'is-md',
};

Profile.propTypes = {
  avatarUrl: PropTypes.string,
  name: PropTypes.string,
  bio: PropTypes.string,
  size: PropTypes.oneOf(['is-sm', 'is-md']),
};
