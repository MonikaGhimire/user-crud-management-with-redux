import React, { Component } from 'react';
import './App.css';
import './utilities/_variables.scss';
import UsersList from './containers/UsersList/UsersList';
import AddUser from './containers/AddUser/AddUsers';
import UpdateUser from './containers/UpdateUser/UpdateUser';
import DeleteUser from './containers/DeleteUser/DeleteUserModal';
import { Switch, Route, Redirect } from 'react-router-dom';
import NotificationComponent from './components/UI/Notification/Notification';

class App extends Component {
  render() {
   
    let routes = (
      <Switch>
      
      <Route path='/add-new-user' component={AddUser}/>
      <Route path='/update-user/:userId' component={UpdateUser}/>
      <Route path='/delete-user/:userId' component={DeleteUser}/>
      <Route exact path='/' component={UsersList}/>
      <Redirect to='/' />
      </Switch>
      );    

    return (
      <div className="App">
      <h1 className="heading-1">Users Management System</h1>
        <NotificationComponent />
        {routes}
      </div>
    );
  }
}

export default App;
