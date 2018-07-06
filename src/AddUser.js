import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';

class AddUser extends Component {
  
  state = {
    user: {
      firstName: '',
      lastName: '',
      userName: '',
      gamesPlayed: 0
    },
    userExists: false,
    errMesg: '',
  };

  contactExists = currUsername => {
     const users = this.props.users;

     for (let user of users) {
       console.log( user.userName, currUsername, user.userName === currUsername);
       if (user.userName === currUsername) {
          return true;
       }
     }
     return false;
  }

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState(currState => ({
      ...currState,
      user: {
        ...currState.user,
        [name]: value,
      },
      userExists: false,
    }));
  };

  handleSubmit = event => {
    event.preventDefault();
    const userExists = this.contactExists(this.state.user.userName);

    if (!userExists) {
      this.props.onAddUser(this.state.user);
    } 
    else {
      this.setState(() => ({
         errMesg: 'This User Already Exists!',
      }));
    }

    this.setState(() => ({
      userExists: userExists,
    }));
  };



  render(){
    const { firstName, lastName, userName } = this.state.user;
    return(
     <div>
       <div className="err_mesg">{this.state.errMesg}</div>
       <div>
         <form onSubmit={this.handleSubmit}>
           <input
              type="text"
              name="firstName"
              placeholder="Enter First Name"
              value={firstName}
              onChange={this.handleInputChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Enter Last Name"
              value={lastName}
              onChange={this.handleInputChange}
            />
            <input
              type="text"
              name="userName"
              placeholder="Enter User Name"
              value={userName}
              onChange={this.handleInputChange}
            />
          <button>Add User</button>
        </form>
       </div>
     </div>
    );
  }
  
}

AddUser.propTypes = {
   onAddUser: PropTypes.func.isRequired, 
}

export default AddUser;
