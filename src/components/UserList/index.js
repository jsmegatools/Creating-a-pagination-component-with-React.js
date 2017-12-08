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
      count: 10
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(page) {
    const renderedUsers = this.state.users.slice(page - 1, page + 1);
    // here we request the new files
    this.setState({ page, renderedUsers });
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ users, renderedUsers: users.slice(0, 2) });
    })
  }

  render() {
    const { page, count, renderedUsers } = this.state;
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
          count={count}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }

}

export default UserList;
