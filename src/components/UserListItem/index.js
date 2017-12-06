import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardActions, CardMedia, CardTitle } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

// Consider switching to PureComponent, when performance becomes an issue in your app
const CardExampleWithAvatar = ({ id, Avatar, first_name, last_name }) => (
  <div className="user-list-item">
    <Card>
      <CardMedia style={{
        width: '400px',
        height: '400px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#eee'
       }}>
        <img src={Avatar} alt={`${first_name} ${last_name}`} />
      </CardMedia>
      <CardTitle
        title={`${first_name} ${last_name}`}
        style={{ height: '72px', display: 'flex', alignItems: 'center' }}
      />
      <CardActions style={{ display: 'flex' }} >
        <Link to={`/user/${id}`}>
          <FlatButton label="View Details" />
        </Link>
        <FlatButton label="Action2" />
      </CardActions>
    </Card>
  </div>
);

export default CardExampleWithAvatar;
