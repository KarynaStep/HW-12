import React from "react";
import { withUser } from "../HOCs";

const Avatar = ({ user: { avatar } }) => (
  <div>
    <img src={avatar} alt="avatar" />
  </div>
);

export default withUser(Avatar);
