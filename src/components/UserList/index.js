import React, { Component } from 'react';
import './style.css';
import UserListItem from '../UserListItem';
import users from '../../mock_data';
import Pagination from '../Pagination';

// Consider switching to PureComponent, when performance becomes an issue in your app
class UserList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [],
      renderedUsers: [],
      page: 1,
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(page) {
    const renderedUsers = this.state.users.slice((page - 1) * 2, (page - 1) * 2 + 2);
    // in a real app you could query the specific page from a server user list
    this.setState({ page, renderedUsers });
  }

  componentDidMount() {
    // In a real app we make an http request
    setTimeout(() => {
      this.setState({ users, renderedUsers: users.slice(0, 2), total: users.length });
    })
  }

  render() {
    const { page, total, renderedUsers } = this.state;
    return (
      <div>
        <ul id="user-list">
          {
            renderedUsers.map(user =>
            <li key={user.id} className="user-list-item">
              <UserListItem {...user} />
            </li>)
          }
        </ul>
        <Pagination
          margin={2}
          page={page}
          count={Math.ceil(total / 2)}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }

}

export default UserList;
