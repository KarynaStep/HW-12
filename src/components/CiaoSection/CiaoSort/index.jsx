import React, { Component } from 'react';

const CiaoSort = () => {
const sortUsersByFirstName = () => {
    const { users, isSortFirstNameUp } = this.props;
    const newUsers = JSON.parse(JSON.stringify(users));
    newUsers.sort((a, b) => {
      if (a.firstName > b.firstName) {
        return isSortFirstNameUp ? 1 : -1;
      }
      if (a.firstName < b.firstName) {
        return isSortFirstNameUp ? -1 : 1;
      }
      return 0;
    });
    //виклик батьківської функції
    this.setState({ users: newUsers, isSortFirstNameUp: !isSortFirstNameUp });
  };
 const  sortUsersById = () => {
    const { users, isSortIdUp } = this.props;
    const newUsers = JSON.parse(JSON.stringify(users));
    newUsers.sort((a, b) => {
      if (isSortIdUp) {
        return a.id - b.id;
      }
      return b.id - a.id;
    });
    this.setState({ users: newUsers, isSortIdUp: !isSortIdUp });
  };

    return (
      <div>
        <button onClick={sortUsersByFirstName}>
          sort by name {isSortFirstNameUp ? 'up' : 'down'}
        </button>
        <button onClick={sortUsersById}>
          sort by id {isSortIdUp ? 'up' : 'down'}
        </button>
      </div>
    );
}


export default CiaoSort;
