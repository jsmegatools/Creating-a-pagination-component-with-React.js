import React, { Component } from 'react';
import './style.css';

class UserList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>User List</div>
    );
  }

}

export default UserList;
