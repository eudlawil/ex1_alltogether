import React, { Component } from 'react';
import User from './User';
import PropTypes from 'prop-types';

class UserList extends Component {
    
    render(){ 
      const displayGamesPlayed = this.props.displayGamesPlayed;
      console.log(this.props.users);
       return (
          <div className="user_list">
          <p>User List</p>
            <ol className="user_list"> { this.props.users.map((user, index) => <User key={index} user={user} displayGamesPlayed={displayGamesPlayed} />)}</ol>
          </div>
        );
      }
}

UserList.propTypes = {
  users: PropTypes.array.isRequired, 
};


export default UserList