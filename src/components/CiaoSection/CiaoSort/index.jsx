import React, { Component } from 'react';

class CiaoSort extends Component {
  sortUsersByFirstName = () => {
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
  sortUsersById = () => {
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
  render() {
    const { isSortFirstNameUp, isSortIdUp } = this.props;
    return (
      <div>
        <button onClick={this.sortUsersByFirstName}>
          sort by name {isSortFirstNameUp ? 'up' : 'down'}
        </button>
        <button onClick={this.sortUsersById}>
          sort by id {isSortIdUp ? 'up' : 'down'}
        </button>
      </div>
    );
  }
}

export default CiaoSort;
