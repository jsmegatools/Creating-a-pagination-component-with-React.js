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
      page: 1,
      count: 10
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(page) {
    // here we request the new files
    this.setState({ page });
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ users });
    })
  }

  render() {
    const { page, count, users } = this.state;
    return (
      <div>
        <ul id="user-list">
          {
            users.map(user =>
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
