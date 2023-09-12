import React, { Component } from 'react';
import { USERS } from '../../constants';
import CardList from './CardList';
import CardSelectList from './CardSelectList';

class CardSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: USERS.map((user) => ({ ...user, isSelect: false })),
    };
  }

  setSelectUsers = (newUsers) => {
    this.setState({ users: newUsers });
  };

  render() {
    const { users } = this.state;
    return (
      <>
        <CardSelectList users={users} />
        <CardList users={users} setSelectUsers={this.setSelectUsers} />
      </>
    );
  }
}

export default CardSection;
