import React from 'react';
import CardUser from '../CardSection/CardUser';

const Child = (props) => {
  const {user} = props;
  return (
    <div>
      Child
      <CardUser user={user}/>
    </div>
  );
}

export default Child;
