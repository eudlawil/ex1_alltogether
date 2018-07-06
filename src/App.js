import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddUser from './AddUser';
import UserList from './UserList';

class App extends Component {
  
  state = {
    users: [ 
             { firstName: 'Lisa',
               lastName:  'Williams',
               userName: 'eudlawil',
               gamesPlayed: 52
             }
           ],
    displayGamesPlayed: true
  }

  addUser = ( user ) => {
    this.setState( (prevState) => ({ 
       users : prevState.users.concat([ user ])  
    }))
  }

  toggleGamesPlayed = () => {
     this.setState( (prevState) => ({ 
       displayGamesPlayed : ( prevState.displayGamesPlayed  ? false : true )
    }))
  }

  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <AddUser onAddUser = { ( user ) => { 
                                 this.addUser(user)
                 }} 
                 users = {this.state.users}
        />
        <button onClick={this.toggleGamesPlayed}>Toggle Games Played</button>
        <UserList users = {this.state.users} displayGamesPlayed={this.state.displayGamesPlayed} />
      </div>
    );
  }
}

export default App;
