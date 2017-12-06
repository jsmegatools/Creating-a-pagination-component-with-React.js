import React, { Component } from 'react';
import './style.css';
import UserListItem from '../UserListItem';
import users from '../../mock_data';

// Consider switching to PureComponent, when performance becomes an issue in your app
class UserList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ users });
    })
  }

  render() {
    return (
      <ul id="user-list">
        {
          this.state.users.map(user =>
          <li key={user.id} className="user-list-item">
            <UserListItem {...user} />
          </li>)
        }
      </ul>
    );
  }

}

export default UserList;
