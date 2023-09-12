import { Component } from 'react';
import CiaoList from './CiaoList';
import CiaoSort from './CiaoSort';
import { USERS } from '../../constants';

class CiaoSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: USERS,
      isSortIdUp: true,
      isSortFirstNameUp: true,
    };
  }

  //написати функцію, яку передасте дитині, щоб дитина мала можливість змінювати стан батьківському елементу

  render() {
    const { users, isSortIdUp, isSortFirstNameUp } = this.state;
    return (
      <>
        <CiaoSort
          // передасте пропсами функцію, яка дозволяє змінити стан
          users={users}
          isSortIdUp={isSortIdUp}
          isSortFirstNameUp={isSortFirstNameUp}
        />
        <CiaoList users={users} />
      </>
    );
  }
}

export default CiaoSection;
