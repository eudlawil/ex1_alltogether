import React from 'react';
import PropTypes from 'prop-types';

const User = (props) => {
  const displayGamesPlayed = props.displayGamesPlayed;
  const gamesPlayed = displayGamesPlayed ? props.user.gamesPlayed : '\\*';
  return (
       <li className="user">{props.user.firstName} {props.user.lastName}: {props.user.userName} Games Played: {gamesPlayed}</li>
    );
};

User.propTypes = {
    user: PropTypes.object.isRequired,
}

export default User