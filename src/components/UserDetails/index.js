import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';
import './style.css';
import users from '../../mock_data';

class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      statusMessage: false
    };
    this.saveChanges = this.saveChanges.bind(this);
  }
  componentDidMount() {
    // In a real app you query your server for a user with particular ID via,
    // some http library
    setTimeout(() => {
      const user = users.find(user => user.id === +this.props.match.params.id);
      this.setState({ user });
    });
  }
  saveChanges(event) {
    event.preventDefault();
    const inputs = event.target.getElementsByTagName('input');
    Array.prototype.forEach.call(inputs, element =>
      console.log(`saving ${element.name} with value ${element.value}`));
    this.setState({ statusMessage: true });
  }
  render() {
    if (!this.state.user) return null;
    const { Avatar, first_name, last_name, age, email } = this.state.user;
    return (
      <div id="user-details-container">
        <Link to="/" id="user-details-home-link">
          <RaisedButton label="User List" />
        </Link>
        <form onSubmit={this.saveChanges} id="user-details-form">
          <div id="user-details-avatar">
            <img src={`/${Avatar}`} alt={`${first_name} ${last_name}`} />
          </div>
          <TextField
            name="first_name"
            hintText="Enter first name"
            floatingLabelText="First Name"
            defaultValue={first_name}
          />
          <TextField
            name="last_name"
            hintText="Enter last name"
            floatingLabelText="Last Name"
            defaultValue={last_name}
          />
          <TextField
            name="email"
            hintText="Enter email"
            floatingLabelText="Email"
            defaultValue={email}
          />
          <TextField
            name="age"
            hintText="Enter Age"
            floatingLabelText="Age"
            defaultValue={age}
          />
          <div id="user-details-button-container">
            <RaisedButton
              label="Save"
              primary={true}
              type="submit"
              style={{ marginRight: '12px' }}
            />
          </div>
        </form>
        <Snackbar
          open={this.state.statusMessage}
          message="User details saved"
          autoHideDuration={4000}
        />
      </div>
    );
  }
}

export default UserDetails;
