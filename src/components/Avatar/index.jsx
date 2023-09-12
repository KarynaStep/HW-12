import React, { Component } from 'react';
import { UserContext } from '../../contexts';

class Avatar extends Component {
  render() {
    const {
      user: { avatar },
    } = this.context;
    return (
      <div>
        <img src={avatar} alt="avatar" />
      </div>
    );
  }
}

Avatar.contextType = UserContext;

// const Avatar = () => {
//   const render = ({ user: { avatar } }) => {
//     return (
//       <div>
//         <img src={avatar} alt="avatar" />
//       </div>
//     );
//   };

//   return <UserContext.Consumer>{render}</UserContext.Consumer>;
// };

export default Avatar;
