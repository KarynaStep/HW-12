import React from 'react';
import PropTypes from 'prop-types';
import CardUser, { userShape, defaultUser } from '../CardUser';

const CardList = (props) => {
  const { users, setSelectUsers } = props;

  const selectorUser = (id) => {
    const newUsers = JSON.parse(JSON.stringify(users));
    const newUsersWithSelect = newUsers.map((user) => ({
      ...user,
      isSelect: user.id === id ? !user.isSelect : user.isSelect,
    }));
    setSelectUsers(newUsersWithSelect);
  };

  const createCard = (user) => (
    <CardUser key={user.id} user={user} selectorUser={selectorUser} />
  );

  return <section>{users.map(createCard)}</section>;
};

CardList.propTypes = {
  users: PropTypes.arrayOf(userShape.isRequired).isRequired,
  setSelectUsers: PropTypes.func,
};

CardList.defaultProps = {
  users:[defaultUser],
  setSelectUsers:()=>{}
}


export default CardList;
